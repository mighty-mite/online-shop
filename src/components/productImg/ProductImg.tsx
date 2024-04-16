/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/useHttp';
import { ICard } from '../../service/types';

import './SingleProductPage.scss';

interface Props {
  images: string[];
}

function ProductImg(props: Props) {
  const { images } = props;
  // const [isAdded, setIsAdded] = useState(false);
  // const [amount, setAmount] = useState(0);
  const [current, setCurrent] = useState(images[0]);

  // const onAdd = () => {
  //   setIsAdded(!isAdded);
  // };

  // const decrement = () => {
  //   if (amount <= 1) {
  //     setIsAdded(!isAdded);
  //     return;
  //   }
  //   setAmount((value) => value - 1);
  // };

  // const increment = () => {
  //   setAmount((value) => value + 1);
  // };
  // const [mainImage, setMainImage] = useState('');
  // const onImage = (src: string) => {
  //   setMainImage(src);
  // };
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
              <button onClick={() => onImage(item)} type="button">
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
