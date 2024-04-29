import { useSelector } from 'react-redux';
import './OrderSummary.scss';
import { RootState } from '../../store';

function OrderSummary() {
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const delivery = useSelector((state: RootState) => state.cart.delivery);
  const total = useSelector((state: RootState) => state.cart.total);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="summary cartpage__summary"
    >
      <h2 className="summary__heading">Order Summary</h2>
      <div className="summary__subtotal">
        <div className="summary__subtotal-text">Subtotal</div>
        <input
          readOnly
          type="text"
          value={subtotal}
          className="summary__subtotal-data"
        />
      </div>
      <div className="summary__delivery">
        <div className="summary__delivery-text">Delivery</div>
        <input
          readOnly
          type="text"
          value={delivery}
          className="summary__delivery-data"
        />
      </div>
      <div className="summary__total">
        <div className="summary__total-text">Total</div>
        <input
          readOnly
          value={total}
          type="text"
          className="summary__total-data"
        />
      </div>
      <button className="summary__submit" type="submit">
        Make Order
      </button>
    </form>
  );
}

export default OrderSummary;
