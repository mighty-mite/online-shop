import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store';
import {
  decrementValue,
  incrementValue,
  removeItem,
  selectQtyById,
} from '../../pages/cartPage/cartSlice';
import { ICard } from '../../service/types';
import { selectById } from '../cardField/cardsSlice';
import './CartItem.scss';

interface Props {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function CartItem(props: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const { id, title, price, thumbnail } = props;

  const QTY = useSelector((state: RootState) =>
    selectQtyById(state, Number(id))
  );
  const thisCard = useSelector((state: RootState) =>
    selectById(state, id)
  ) as ICard;

  const increment = () => {
    dispatch(incrementValue({ id: thisCard.id, thisCard, quantity: QTY }));
  };

  const decrement = () => {
    if (QTY <= 1) {
      dispatch(decrementValue({ id: thisCard.id, thisCard, quantity: QTY }));
      dispatch(removeItem(id));
    } else {
      dispatch(decrementValue({ id: thisCard.id, thisCard, quantity: QTY }));
    }
  };

  const remove = () => {
    dispatch(removeItem(id));
  };

  return (
    <li className="cartitem">
      <Link to={`/${id}`} className="cartitem__link">
        <img src={thumbnail} alt="product" className="cartitem__img" />
      </Link>
      <div className="cartitem__info">
        <h3 className="cartitem__heading">{title}</h3>
        <div className="cartitem__price">${price}</div>
      </div>
      <div className="cartitem__btns">
        <button type="button" className="cartitem__delete" onClick={remove}>
          <img src="" alt="" />
        </button>
        <div className="cartitem__change-qnt-container">
          <button
            className="cartitem__change-qnt"
            type="button"
            onClick={decrement}
          >
            -
          </button>
          <input
            type="text"
            readOnly
            value={QTY}
            className="cartitem__quantity-input"
          />
          <button
            className="cartitem__change-qnt"
            type="button"
            onClick={() => increment()}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
