import { Link } from 'react-router-dom';

import './Card.scss';

import img from '../../assets/cardpicture.png';

function Card() {
  return (
    <div className="card">
      <Link className="card__link" to="/shop">
        <img src={img} alt="title" className="card__img" width="295" />
        <div className="card__text">
          <h2 className="card__heading">name</h2>
          <p className="card__price">
            <span className="card__currency">$</span>
            <span className="card__price-data">666</span>
          </p>
        </div>
      </Link>
      <button className="card__add" type="button">
        Add To Cart
      </button>
    </div>
  );
}

export default Card;
