import { Dispatch, SetStateAction } from 'react';

import './ProductInfo.scss';

interface Props {
  title: string;
  price: number;
  description: string;
  increment: () => void;
  decrement: () => void;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

function ProductInfo(props: Props) {
  // const [isAdded, setIsAdded] = useState(false);

  // const onAdd = () => {
  //   setIsAdded(!isAdded);
  // };

  // const [mainImage, setMainImage] = useState('');
  // const onImage = (src: string) => {
  //   setMainImage(src);
  // };

  const { title, price, description, setAmount, decrement, increment, amount } =
    props;

  return (
    <div className="product__info">
      <h1 className="product__title">{title}</h1>
      <h2 className="product__price">${price}</h2>
      <h3 className="product__description">{description}</h3>
      <div className="product__btns">
        <button
          className="product__add"
          // disabled={isAdded}
          type="button"
          // onClick={onAdd}
        >
          Buy
        </button>

        <div className="product__change-qnt-container">
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
            onChange={(e) => setAmount(Number(e.target.value))}
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
