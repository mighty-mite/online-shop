import './OrderSummary.scss';

function OrderSummary() {
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
          value="$45"
          className="summary__subtotal-data"
        />
      </div>
      <div className="summary__delivery">
        <div className="summary__delivery-text">Delivery</div>
        <input
          readOnly
          type="text"
          value="$1"
          className="summary__delivery-data"
        />
      </div>
      <div className="summary__total">
        <div className="summary__total-text">Total</div>
        <input
          readOnly
          value="$46"
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
