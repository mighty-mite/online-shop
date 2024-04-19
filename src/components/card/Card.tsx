import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectById } from '../cardField/cardsSlice';
import {
  selectAll,
  addItem,
  changeQty,
  removeItem,
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

function Card(props: Props) {
  const { id, title, price, thumbnail } = props;

  const thisCard = useSelector((state: RootState) => selectById(state, id));

  const [isAdded, setIsAdded] = useState(false);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch<AppDispatch>();

  const onClick = () => {
    // !
    setIsAdded(!isAdded);
    setAmount(() => {
      const newValue = 1;
      dispatch(
        addItem({
          id: thisCard.id,
          thisCard,
          quantity: newValue,
          isAdded: true,
        })
      );

      return newValue;
    });
  };

  const decrement = () => {
    if (amount <= 1) {
      // !
      setIsAdded(!isAdded);
    }
    setAmount((value) => {
      const newValue = value - 1;
      dispatch(changeQty({ id: thisCard.id, thisCard, quantity: newValue }));
      if (newValue === 0) {
        dispatch(removeItem(id));
      }
      return newValue;
    });
  };

  const increment = () => {
    setAmount((value) => {
      const newValue = value + 1;
      dispatch(changeQty({ id: thisCard.id, thisCard, quantity: newValue }));
      return newValue;
    });
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
          // !
          className={`card__add ${isAdded ? '' : 'active'}`}
          type="button"
          onClick={onClick}
        >
          Buy
        </button>

        <div
          // !
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
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
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
