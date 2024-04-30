import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import CardField from '../../components/cardField/CardField';
import Filters from '../../components/filters/Filters';
import { addItem } from '../cartPage/cartSlice';

import './ShopPage.scss';

function ShopPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Object.keys(localStorage).forEach((key) => {
      const itemRetrieved = localStorage.getItem(key);
      if (itemRetrieved) {
        const item = JSON.parse(itemRetrieved);
        dispatch(addItem(item));
      }
    });
  }, [dispatch]);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="shop">
      <div className="container shop__container">
        <div className="shop__sticky-container">
          <Filters isModalOpen={isModalOpen} showModal={showModal} />
        </div>
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          type="button"
          className="shop__filters-mobile-button"
        >
          <img src="./src/assets/filters.svg" alt="" />
        </button>
        <div className="shop__cardfield-wrapper">
          <CardField />
        </div>
      </div>
      <div className={`shop__overlay ${isModalOpen ? 'active' : ''}`} />
    </section>
  );
}

export default ShopPage;
