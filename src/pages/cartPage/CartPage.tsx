import { useSelector } from 'react-redux';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import CartItem from '../../components/cartItem/CartItem';
import { selectAll } from './cartSlice';
import { selectAll as selectCards } from '../../components/cardField/cardsSlice';

import './CartPage.scss';
import { ICard } from '../../service/types';

function CartPage() {
  const cartIitems = useSelector(selectAll);
  const cartItemsIds = cartIitems.map((item) => item.id);
  const items = useSelector(selectCards) as ICard[];
  const myItems = items.filter((item) => cartItemsIds.includes(item.id));
  console.log(myItems);
  return (
    <section className="cartpage">
      <div className="container cartpage__container">
        <h1 className="cartpage__heading">YOUR CARTPAGE</h1>
        <div className="cartpage__components">
          <ul className="cartpage__list">
            <CartItem />
          </ul>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}

export default CartPage;
