import { useState } from 'react';
import Card from '../../components/card/Card';
import Filters from '../../components/filters.tsx/Filters';

import './ShopPage.scss';

function ShopPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="shop__cardfield">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className={`shop__overlay ${isModalOpen ? 'active' : ''}`} />
    </section>
  );
}

export default ShopPage;
