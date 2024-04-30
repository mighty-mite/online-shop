import { useDispatch, useSelector } from 'react-redux';
import { maxPriceChange, minPriceChange } from '../filters/filterSettingsSlice';
import { AppDispatch, RootState } from '../../store';

import './Price.scss';

export default function PriceRangeSlider() {
  const minPrice = useSelector((state: RootState) => state.filters.minPrice);
  const maxPrice = useSelector((state: RootState) => state.filters.maxPrice);

  const dispatch = useDispatch<AppDispatch>();

  const onMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let price = e.target.value.trim();

    price = price.replace(/\D/g, '');

    if (Number(price) < 0) return;
    if (Number(price) >= maxPrice) return;
    dispatch(minPriceChange(Number(price)));
  };

  const onMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let price = e.target.value.trim();

    price = price.replace(/\D/g, '');
    if (Number(price) < 0) return;
    dispatch(maxPriceChange(Number(price)));
  };
  return (
    <div className="filters__item price">
      <h2 className="price__heading">Filter by price</h2>
      <div className="price__container">
        <input
          type="text"
          min="5"
          value={minPrice}
          onChange={onMinPriceChange}
          className="price__input price__from"
        />
        <input
          type="text"
          min="5"
          value={maxPrice}
          onChange={onMaxPriceChange}
          className="price__input price__to"
        />
      </div>
    </div>
  );
}
