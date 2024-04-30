import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectById } from '../cardField/cardsSlice';
import {
  addItem,
  removeItem,
  selectIsAddedById,
  selectQtyById,
  incrementValue,
  decrementValue,
} from '../../pages/cartPage/cartSlice';
import { AppDispatch, RootState } from '../../store';

import { ICard } from '../../service/types';
import './Card.scss';

interface Props {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export interface CartItem {
  id: number;
  isAdded: boolean;
  quantity: number;
  thisCard: ICard;
}

function Card(props: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { id, title, price, thumbnail } = props;

  const thisCard = useSelector((state: RootState) =>
    selectById(state, id)
  ) as CartItem;

  const ISADDED = useSelector((state: RootState) =>
    selectIsAddedById(state, id)
  );
  const QTY = useSelector((state: RootState) => selectQtyById(state, id));

  const [isAdded, setIsAdded] = useState(ISADDED);

  const onClick = () => {
    setIsAdded(!isAdded);
    dispatch(
      addItem({
        id: thisCard.id,
        thisCard,
        isAdded: true,
        quantity: 1,
      })
    );
  };

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

  return (
    <div className="card">
      <Link className="card__link" to={`/${id}`}>
        <div className="card__img-wrapper">
          <img src={thumbnail} alt="title" className="card__img" />
        </div>
        <div className="card__text">
          <h2 className="card__heading">{title}</h2>
          <p className="card__price">
            <span className="card__currency">$</span>
            <span className="card__price-data">{price}</span>
          </p>
        </div>
      </Link>
      <div className="card__add-container">
        <button
          className={`card__add ${isAdded ? '' : 'active'}`}
          type="button"
          onClick={onClick}
        >
          Buy
        </button>

        <div
          className={`card__change-qnt-container ${isAdded ? 'active' : ''}`}
        >
          <button
            className="card__change-qnt"
            type="button"
            onClick={decrement}
          >
            -
          </button>
          <input
            type="text"
            value={QTY}
            readOnly
            className="card__quantity-input"
          />
          <button
            className="card__change-qnt"
            type="button"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
