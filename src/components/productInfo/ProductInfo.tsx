import { Dispatch, SetStateAction, useState } from 'react';

import './ProductInfo.scss';
import { useSelector } from 'react-redux';
import { selectById } from '../cardField/cardsSlice';
import { CartItem } from '../card/Card';
import { RootState } from '../../store';

interface Props {
  id: number;
  title: string;
  price: number;
  description: string;
  increment: () => void;
  decrement: () => void;
  amount: number;
  isAdded: boolean;
  onAdd: (id: number) => void;
}

function ProductInfo(props: Props) {
  const {
    id,
    isAdded,
    title,
    price,
    description,
    decrement,
    increment,
    amount,
    onAdd,
  } = props;

  return (
    <div className="product__info">
      <h1 className="product__title">{title}</h1>
      <h2 className="product__price">${price}</h2>
      <h3 className="product__description">{description}</h3>
      <div className="product__btns">
        <button
          className={`product__add ${isAdded ? '' : 'active'}`}
          type="button"
          onClick={() => {
            onAdd(id);
          }}
        >
          Buy
        </button>

        <div
          className={`product__change-qnt-container ${isAdded ? 'active' : ''}`}
        >
          <button
            className="product__change-qnt"
            type="button"
            onClick={decrement}
          >
            -
          </button>
          <input
            type="text"
            value={amount}
            readOnly
            // onChange={(e) => setAmount(Number(e.target.value))}
            className="product__quantity-input"
          />
          <button
            className="product__change-qnt"
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

export default ProductInfo;
