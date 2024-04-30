import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import './ProductImg.scss';

interface Props {
  images: string[];
}

function ProductImg(props: Props) {
  const { images } = props;
  const [current, setCurrent] = useState(images[0]);

  const onImage = (img: string) => {
    setCurrent(img);
  };
  return (
    <div className="product__img-container">
      <div className="product__img-main-container">
        <img className="product__img-main" src={current} alt="" />
      </div>
      <ul className="product__img-list">
        {images.map((item: string) => {
          return (
            <li key={nanoid()} className="product__img-item">
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
