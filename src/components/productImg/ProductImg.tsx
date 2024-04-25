/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import './ProductImg.scss';

interface Props {
  images: string[];
}

function ProductImg(props: Props) {
  const { images } = props;
  const [current, setCurrent] = useState(images[0]);

  const onImage = (it: string) => {
    setCurrent(it);
  };
  return (
    <div className="product__img-container">
      <div className="product__img-main-container">
        <img className="product__img-main" src={current} alt="" />
      </div>
      <ul className="product__img-list">
        {images.map((item: string, i) => {
          return (
            <li key={i} className="product__img-item">
              <button
                onClick={() => onImage(item)}
                type="button"
                className="product__img-pic-btn"
              >
                <img src={item} alt="" className="product__img-pic" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductImg;
