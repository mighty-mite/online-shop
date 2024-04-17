/* eslint-disable jsx-a11y/anchor-has-content */
import './CartItem.scss';

function CartItem() {
  return (
    <li className="cartitem">
      <a href="/" className="cartitem__link">
        <img src="./" alt="" />
      </a>
      <div className="cartitem__info">
        <h3 className="cartitem__heading">heading</h3>
        <div className="cartitem__price">$3</div>
      </div>
      <div className="cartitem__btns">
        <button type="button">
          <img src="" alt="" />
        </button>
        <div className="product__change-qnt-container">
          <button
            className="product__change-qnt"
            type="button"
            // onClick={decrement}
          >
            -
          </button>
          <input
            type="text"
            // value={amount}
            // onChange={(e) => setAmount(Number(e.target.value))}
            className="product__quantity-input"
          />
          <button
            className="product__change-qnt"
            type="button"
            // onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
