import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './OrderSummary.scss';

function OrderSummary() {
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const delivery = useSelector((state: RootState) => state.cart.delivery);
  const total = useSelector((state: RootState) => state.cart.total);

  const onTouchPhone = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.value === '') target.value = '+7 ';
  };

  const onBlurPhone = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.value === '+7 ' || target.value === '+7' || target.value === '+')
      target.value = '';
  };

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
          value={`$${subtotal}`}
          className="summary__subtotal-data"
        />
      </div>
      <div className="summary__delivery">
        <div className="summary__delivery-text">Delivery</div>
        <input
          readOnly
          type="text"
          value={`$${delivery}`}
          className="summary__delivery-data"
        />
      </div>
      <div className="summary__total">
        <div className="summary__total-text">Total</div>
        <input
          readOnly
          value={`$${total}`}
          type="text"
          className="summary__total-data"
        />
      </div>
      <div className="summary__input-wrapper">
        <input
          className="summary__input"
          type="text"
          placeholder="Your name"
          required
          minLength={2}
        />
        <input
          className="summary__input"
          type="tel"
          placeholder="+7 XXX XXX XX XX"
          required
          maxLength={13}
          onFocus={onTouchPhone}
          onBlur={onBlurPhone}
        />
      </div>

      <input
        className="summary__input"
        type="email"
        placeholder="E-mail"
        required
        pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/"
      />
      <button className="summary__submit" type="submit">
        Make Order
      </button>
    </form>
  );
}

export default OrderSummary;
