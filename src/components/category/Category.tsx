/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchCategories } from './categorySlice';
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
    return arr.map((item, i: number) => (
      <li key={i} className="category__wrapper">
        <label htmlFor={item} className="category__label">
          <input
            checked={filterSettings.includes(item)}
            onClick={(e) => {
              const target = e.target as HTMLInputElement;
              onCategoryHandler(item, target.checked);
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
