import './CartItem.scss';
import img from '../../assets/1.jpg';

function CartItem() {
  return (
    <li className="cartitem">
      <a href="/" className="cartitem__link">
        <img src={img} alt="product" className="cartitem__img" />
      </a>
      <div className="cartitem__info">
        <h3 className="cartitem__heading">heading</h3>
        <div className="cartitem__price">$3</div>
      </div>
      <div className="cartitem__btns">
        <button type="button" className="cartitem__delete">
          <img src="" alt="" />
        </button>
        <div className="cartitem__change-qnt-container">
          <button
            className="cartitem__change-qnt"
            type="button"
            // onClick={decrement}
          >
            -
          </button>
          <input
            type="text"
            readOnly
            // value={1}
            // value={amount}
            // onChange={(e) => setAmount(Number(e.target.value))}
            className="cartitem__quantity-input"
          />
          <button
            className="cartitem__change-qnt"
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
