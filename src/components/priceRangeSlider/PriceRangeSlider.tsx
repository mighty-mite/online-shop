import { useDispatch, useSelector } from 'react-redux';
import { maxPriceChange, minPriceChange } from '../filters/filterSettingsSlice';
import { AppDispatch, RootState } from '../../store';

import './Price.scss';

export default function PriceRangeSlider() {
  const minPrice = useSelector((state: RootState) => state.filters.minPrice);
  const maxPrice = useSelector((state: RootState) => state.filters.maxPrice);

  const dispatch = useDispatch<AppDispatch>();

  const onMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) return;
    if (Number(e.target.value) >= maxPrice) return;
    dispatch(minPriceChange(Number(e.target.value)));
  };

  const onMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) return;
    dispatch(maxPriceChange(Number(e.target.value)));
  };
  return (
    <div className="filters__item price">
      <h2 className="price__heading">Filter by price</h2>
      <div className="price__container">
        <input
          type="text"
          value={minPrice}
          onChange={onMinPriceChange}
          className="price__input price__from"
        />
        <input
          type="text"
          value={maxPrice}
          onChange={onMaxPriceChange}
          className="price__input price__to"
        />
      </div>
    </div>
  );
}
