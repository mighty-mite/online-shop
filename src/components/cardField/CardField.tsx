import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from './cardsSlice';
import { AppDispatch, RootState, selectAll } from '../../store';
import { ICard } from '../../service/types';
import Card from '../card/Card';

import './CardField.scss';

function CardField() {
  // Селектор
  const loadingStatus = useSelector(
    (state: RootState) => state.cards.cardsLoadingStatus
  );
  const goods = useSelector(selectAll);

  const offset = useSelector((state: RootState) => state.cards.offset);

  // Первая загрузка

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      fetchCards()
      // fetchCards(`https://dummyjson.com/products?limit=${offset}&skip=${0}`)
    );
  }, [dispatch, offset]);

  // Условный рендеринг

  if (loadingStatus === 'error') {
    return <h5 className="cardfield__error">Loaidng error</h5>;
  }

  // Функция рендера карточекы

  const renderCards = (arr: ICard[]) => {
    return arr.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        price={card.price}
        images={card.images}
        title={card.title}
      />
    ));
  };
  const content = renderCards(goods as ICard[]);

  return <div className="cardfield">{content}</div>;
}

export default CardField;
