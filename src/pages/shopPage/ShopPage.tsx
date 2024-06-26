import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardField from '../../components/cardField/CardField';
import Filters from '../../components/filters/Filters';
import { selectTotal, setOffset } from '../../components/cardField/cardsSlice';
import { AppDispatch, RootState } from '../../store';
import filtersMobileButton from '../../assets/filters.svg';

import './ShopPage.scss';

function ShopPage() {
  const { offset } = useSelector((state: RootState) => state.cards);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { filteredCards } = useSelector((state: RootState) => state.cards);
  const offsetMax = useSelector(selectTotal);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSetOffset = () => {
    if (filteredCards.length <= 10) return;
    if (filteredCards.length <= offset) return;
    if (offset > offsetMax) return;
    dispatch(setOffset());
  };

  const loadingStatus = useSelector(
    (state: RootState) => state.cards.cardsLoadingStatus
  );

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
          <img src={filtersMobileButton} alt="" />
        </button>
        <div className="shop__cardfield-wrapper">
          <CardField offset={offset} />
          <button
            onClick={onSetOffset}
            disabled={loadingStatus === 'loading'}
            type="button"
            className={`shop__cardfield-load-btn ${
              filteredCards.length === 0 ||
              offset >= offsetMax ||
              filteredCards.length <= 10 ||
              offset >= filteredCards.length
                ? 'inactive'
                : 'active'
            }`}
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
