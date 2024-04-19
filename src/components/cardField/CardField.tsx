import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards, selectAll } from './cardsSlice';
import { AppDispatch, RootState } from '../../store';
import { ICard } from '../../service/types';
import Card from '../card/Card';
import filterCards from '../../service/filter';

import './CardField.scss';

function CardField() {
  const dispatch = useDispatch<AppDispatch>();
  // Селектор
  const loadingStatus = useSelector(
    (state: RootState) => state.cards.cardsLoadingStatus
  );

  const filterSettings = useSelector((state: RootState) => state.filters);

  const goods = useSelector(selectAll);

  const filteredCards = filterCards(goods as ICard[], filterSettings);

  // dispatch(setFilteredCards(filteredCards));

  const offset = useSelector((state: RootState) => state.cards.offset);

  // Первая загрузка

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
        thumbnail={card.thumbnail}
        title={card.title}
      />
    ));
  };
  const content = renderCards(filteredCards);

  return <div className="cardfield">{content}</div>;
}

export default CardField;
