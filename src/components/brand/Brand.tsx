import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import { fetchBrands } from './brandSlice';
import { brandAdded, brandRemoved } from '../filters/filterSettingsSlice';
import { resetOffset } from '../cardField/cardsSlice';
import './Brand.scss';

function Brand() {
  const dispatch = useDispatch<AppDispatch>();

  const brands = useSelector((state: RootState) => state.brands.brand);
  const filterSettings = useSelector((state: RootState) => state.filters.brand);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const onBrandHandler = (item: string, isChecked: boolean) => {
    if (isChecked) {
      dispatch(brandAdded(item));
    } else {
      dispatch(brandRemoved(item));
    }
  };

  const renderBrands = (arr: string[]) => {
    return arr.map((item) => (
      <li key={nanoid()} className="brand__wrapper">
        <label htmlFor={item} className="brand__label">
          <input
            checked={filterSettings.includes(item)}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              onBrandHandler(item, target.checked);
              dispatch(resetOffset());
            }}
            id={item}
            type="checkbox"
            className="brand__option"
          />
          {item}
        </label>
      </li>
    ));
  };

  const content = renderBrands(brands);

  return (
    <div className="brand filters__item">
      <h2 className="category__heading">Brands</h2>
      <ul className="brand__list">{content}</ul>
    </div>
  );
}

export default Brand;
