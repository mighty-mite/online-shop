import Category from '../category/Category';
import PriceRangeSlider from '../priceRangeSlider/PriceRangeSlider';
import './Filters.scss';

interface Props {
  showModal: () => void;
  isModalOpen: boolean;
}

function Filters(props: Props) {
  const { showModal, isModalOpen } = props;
  return (
    <div className={`filters ${isModalOpen ? 'active' : ''}`}>
      <div className="filters__top">
        <h2 className="filters__heading">Filters</h2>
        <button
          onClick={showModal}
          type="button"
          className="filters__close-btn"
        >
          <img src="./src/assets/cross.svg" alt="" className="filters__cross" />
        </button>
      </div>
      <Category />
      <PriceRangeSlider />
      <button className="filters__apply" type="button">
        Apply
      </button>
    </div>
  );
}

export default Filters;
