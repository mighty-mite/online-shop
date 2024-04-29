import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../hooks/useHttp';
import { ICard } from '../../service/types';
import ProductImg from '../../components/productImg/ProductImg';

import ProductInfo from '../../components/productInfo/ProductInfo';
import {
  addItem,
  decrementValue,
  incrementValue,
  removeItem,
  selectIsAddedById,
  selectQtyById,
} from '../cartPage/cartSlice';
import { AppDispatch, RootState } from '../../store';

import './SingleProductPage.scss';
import { fetchCards, selectById } from '../../components/cardField/cardsSlice';

function SingleProductPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const cardId = Number(id);

  const thisCard = useSelector((state: RootState) =>
    selectById(state, cardId)
  ) as ICard;

  const ISADDED = useSelector((state: RootState) =>
    selectIsAddedById(state, cardId)
  );

  const [card, setCard] = useState<ICard>();
  const [isAdded, setIsAdded] = useState(ISADDED);

  const QTY = useSelector((state: RootState) =>
    selectQtyById(state, Number(id))
  );

  const { getSingleProduct } = useHttp();

  const decrement = () => {
    if (QTY <= 1) {
      setIsAdded(!isAdded);
      dispatch(decrementValue({ id: thisCard.id, thisCard, quantity: QTY }));
      dispatch(removeItem(id));
    } else {
      dispatch(decrementValue({ id: thisCard.id, thisCard, quantity: QTY }));
    }
  };

  const increment = () => {
    dispatch(incrementValue({ id: thisCard.id, thisCard, quantity: QTY }));
  };

  const onCardLoaded = (item: ICard) => {
    setCard(item);
  };

  const onAdd = () => {
    setIsAdded(!isAdded);
    dispatch(
      addItem({
        id: cardId,
        thisCard,
        isAdded: true,
        quantity: 1,
      })
    );
  };

  useEffect(() => {
    if (!id) return;
    getSingleProduct(id).then(onCardLoaded);
  }, [card, getSingleProduct, id]);

  if (card === undefined) return '';

  return (
    <section className="product">
      <div className="container product__container">
        <ProductImg images={card.images} />
        <ProductInfo
          id={card.id}
          title={card.title}
          price={card.price}
          description={card.description}
          decrement={decrement}
          increment={increment}
          amount={QTY}
          isAdded={isAdded}
          onAdd={onAdd}
        />
      </div>
    </section>
  );
}

export default SingleProductPage;
