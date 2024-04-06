import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGoods } from './goodsSlice';
import { AppDispatch } from '../../store';
import CardField from '../../components/cardField/CardField';
import Filters from '../../components/filters.tsx/Filters';

import './ShopPage.scss';

function ShopPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

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
        <CardField />
      </div>
      <div className={`shop__overlay ${isModalOpen ? 'active' : ''}`} />
    </section>
  );
}

export default ShopPage;
