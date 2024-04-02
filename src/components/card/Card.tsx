import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Card.scss';

import img from '../../assets/cardpicture.png';

function Card() {
  const [isAdded, setIsAdded] = useState(false);
  const [amount, setAmount] = useState(1);

  const onClick = () => {
    setIsAdded(!isAdded);
  };

  const decrement = () => {
    if (amount <= 1) {
      setIsAdded(!isAdded);
      return;
    }
    setAmount((value) => value - 1);
  };

  const increment = () => {
    setAmount((value) => value + 1);
  };

  return (
    <div className="card">
      <Link className="card__link" to="/shop">
        <img src={img} alt="title" className="card__img" />
        <div className="card__text">
          <h2 className="card__heading">name</h2>
          <p className="card__price">
            <span className="card__currency">$</span>
            <span className="card__price-data">666</span>
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
