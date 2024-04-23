import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectById } from '../cardField/cardsSlice';
import {
  addItem,
  changeQty,
  removeItem,
  selectIsAddedById,
  selectQtyById,
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
      dispatch(removeItem(id));
    } else {
      dispatch(changeQty({ id: thisCard.id, thisCard, quantity: QTY - 1 }));
    }
  };

  const increment = () => {
    dispatch(changeQty({ id: thisCard.id, thisCard, quantity: QTY + 1 }));
  };

  return (
    <div className="card">
      <Link className="card__link" to={`/shop/${id}`}>
        <img src={thumbnail} alt="title" className="card__img" />
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
            // onChange={(e) => setAmount(Number(e.target.value))}
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
