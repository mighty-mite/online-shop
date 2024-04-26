import OrderSummary from '../../components/orderSummary/OrderSummary';
import CartItem from '../../components/cartItem/CartItem';

import './CartPage.scss';

function CartPage() {
  return (
    <section className="cartpage">
      <div className="container cartpage__container">
        <h1 className="cartpage__heading">YOUR CARTPAGE</h1>
        <div className="cartpage__components">
          <ul className="cartpage__list">
            <CartItem />
            <CartItem />
            <CartItem />
          </ul>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}

export default CartPage;
