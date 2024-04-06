import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, selectAll } from '../../store';
import { ICard } from '../../service/types';

import Card from '../card/Card';

import './CardField.scss';

function CardField() {
  const loadingStatus = useSelector(
    (state: RootState) => state.goods.goodsLoadingStatus
  );
  const goods = useSelector(selectAll);

  if (loadingStatus === 'loading') {
    return <div className="cardfield__loading">Loading</div>;
  }
  if (loadingStatus === 'error') {
    return <h5 className="cardfield__error">Loaidng error</h5>;
  }

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
