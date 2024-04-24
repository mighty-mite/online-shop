import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/useHttp';
import { ICard } from '../../service/types';

import './SingleProductPage.scss';
import ProductImg from '../../components/productImg/ProductImg';
import ProductInfo from '../../components/productInfo/ProductInfo';

function SingleProductPage() {
  const [card, setCard] = useState<ICard>();
  const [amount, setAmount] = useState(0);

  const { getSingleProduct } = useHttp();
  const { id } = useParams();

  const decrement = () => {
    setAmount((value) => value - 1);
  };

  const increment = () => {
    setAmount((value) => value + 1);
  };

  const onCardLoaded = (item: ICard) => {
    setCard(item);
  };

  useEffect(() => {
    if (id === undefined) return;
    getSingleProduct(id).then(onCardLoaded);
  }, [card, getSingleProduct, id]);

  if (card === undefined) return '';

  return (
    <section className="product">
      <div className="container product__container">
        <ProductImg images={card.images} />
        <ProductInfo
          title={card.title}
          price={card.price}
          description={card.description}
          decrement={decrement}
          increment={increment}
          amount={amount}
          setAmount={setAmount}
        />
      </div>
    </section>
  );
}

export default SingleProductPage;
