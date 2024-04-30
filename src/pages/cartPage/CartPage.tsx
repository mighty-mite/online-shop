import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import { selectAll } from './cartSlice';
import { CartItem as ICartItem } from '../../components/card/Card';
import CartItem from '../../components/cartItem/CartItem';

import './CartPage.scss';

const render = (arr: ICartItem[]) => {
  return arr.map((item) => {
    return (
      <CartItem
        key={nanoid()}
        id={item.id}
        title={item.thisCard.title}
        price={item.thisCard.price}
        thumbnail={item.thisCard.thumbnail}
      />
    );
  });
};

function CartPage() {
  const cartItems = useSelector(selectAll);
  const isCartEmpty = cartItems.length === 0;

  const content = render(cartItems);

  return (
    <section className="cartpage">
      <div className="container cartpage__container">
        {isCartEmpty ? (
          <div className="cartpage__empty-wrapping">
            <h2 className="cartpage__empty">
              Your cart is empty, lets go shopping!
            </h2>
            <Link className="cartpage__go-back-link" to="/">
              Go back
            </Link>
          </div>
        ) : (
          <div className="cartpage__components">
            <ul className="cartpage__list">{content}</ul>
            <OrderSummary />
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPage;
