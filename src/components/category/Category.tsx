import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import { fetchCategories } from './categorySlice';
import { resetOffset } from '../cardField/cardsSlice';
import { categoryAdded, categoryRemoved } from '../filters/filterSettingsSlice';
import './Category.scss';

function Category() {
  const dispatch = useDispatch<AppDispatch>();

  const categories = useSelector(
    (state: RootState) => state.categories.category
  );
  const filterSettings = useSelector(
    (state: RootState) => state.filters.category
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onCategoryHandler = (item: string, isChecked: boolean) => {
    if (isChecked) {
      dispatch(categoryAdded(item));
    } else {
      dispatch(categoryRemoved(item));
    }
  };

  const renderCategories = (arr: string[]) => {
    return arr.map((item) => (
      <li key={nanoid()} className="category__wrapper">
        <label htmlFor={item} className="category__label">
          <input
            checked={filterSettings.includes(item)}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              onCategoryHandler(item, target.checked);
              dispatch(resetOffset());
            }}
            id={item}
            type="checkbox"
            className="category__option"
          />
          {item}
        </label>
      </li>
    ));
  };

  const content = renderCategories(categories);

  return (
    <div className="category filters__item">
      <h2 className="category__heading">Categories</h2>
      <ul className="category__list">{content}</ul>
    </div>
  );
}

export default Category;
