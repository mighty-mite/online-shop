import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOffset } from '../../components/cardField/cardsSlice';
import CardField from '../../components/cardField/CardField';
import Filters from '../../components/filters/Filters';

import './ShopPage.scss';
import { AppDispatch, RootState } from '../../store';

function ShopPage() {
  // Селектор
  const loadingStatus = useSelector(
    (state: RootState) => state.cards.cardsLoadingStatus
  );

  const dispatch = useDispatch<AppDispatch>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSetOffset = () => {
    dispatch(setOffset());
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
          <button
            disabled={loadingStatus === 'loading'}
            onClick={onSetOffset}
            type="button"
            className="shop__cardfield-load-btn"
          >
            Load more
          </button>
        </div>
      </div>
      <div className={`shop__overlay ${isModalOpen ? 'active' : ''}`} />
    </section>
  );
}

export default ShopPage;
