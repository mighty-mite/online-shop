import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from './cardsSlice';
import { AppDispatch, RootState, selectAll } from '../../store';
import { ICard } from '../../service/types';
import Card from '../card/Card';
import filterCards from '../../service/filter';

import './CardField.scss';

function CardField() {
  // Селектор
  const loadingStatus = useSelector(
    (state: RootState) => state.cards.cardsLoadingStatus
  );

  const filterSettings = useSelector((state: RootState) => state.filters);

  const goods = useSelector(selectAll);

  const filteredCards = filterCards(goods as ICard[], filterSettings);

  const offset = useSelector((state: RootState) => state.cards.offset);

  // Первая загрузка

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch, offset]);

  // Условный рендеринг

  if (loadingStatus === 'loading') {
    return <h5 className="cardfield__error">Loaidng...</h5>;
  }

  if (loadingStatus === 'error') {
    return <h5 className="cardfield__error">Loaidng error</h5>;
  }

  // Функция рендера карточек

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
  const content = renderCards(filteredCards);

  return <div className="cardfield">{content}</div>;
}

export default CardField;
