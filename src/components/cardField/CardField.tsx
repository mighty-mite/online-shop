import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, setFilteredCards } from './cardsSlice';

import { AppDispatch, RootState } from '../../store';
import { ICard } from '../../service/types';
import Card from '../card/Card';
import filterCards from '../../service/filter';
import loader from '../../assets/loader.gif';
import error from '../../assets/error.gif';

import './CardField.scss';

interface Props {
  offset: number;
}

function CardField(props: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { offset } = props;
  const loadingStatus = useSelector(
    (state: RootState) => state.cards.cardsLoadingStatus
  );

  const filterSettings = useSelector((state: RootState) => state.filters);

  const goods = useSelector(selectAll);

  useEffect(() => {
    const filteredCards = filterCards(goods as ICard[], filterSettings);
    dispatch(setFilteredCards(filteredCards));
  }, [dispatch, filterSettings, goods]);

  const { filteredCards } = useSelector((state: RootState) => state.cards);

  const visibleCards = filteredCards.filter((_item, i) => i + 1 <= offset);

  if (loadingStatus === 'loading') {
    return (
      <h5 className="cardfield__loading">
        <img className="cardfield__loading-img" src={loader} alt="loader" />
      </h5>
    );
  }

  if (loadingStatus === 'error') {
    return (
      <h5 className="cardfield__error">
        <img src={error} width="500" alt="error" />
      </h5>
    );
  }

  if (filteredCards.length === 0) {
    return <h5 className="cardfield__error">No such items =(</h5>;
  }

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

  const content = renderCards(visibleCards);

  return <div className="cardfield">{content}</div>;
}

export default CardField;
