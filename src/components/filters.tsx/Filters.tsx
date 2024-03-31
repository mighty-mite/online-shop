import Category from '../category/Category';
import PriceRangeSlider from '../priceRangeSlider/PriceRangeSlider';
import './Filters.scss';

function Filters() {
  return (
    <div className="filters">
      <h2 className="filters__heading">Filters</h2>
      <Category />
      <PriceRangeSlider />
    </div>
  );
}

export default Filters;
