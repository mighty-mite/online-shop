/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchCategories } from './categorySlice';
import './Category.scss';

function Category() {
  const dispatch = useDispatch<AppDispatch>();

  const categories = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories('https://dummyjson.com/products/categories'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCategories = (arr: string[]) => {
    return arr.map((item, i: number) => (
      <li key={i} className="category__wrapper">
        <label htmlFor={item} className="category__label">
          <input id={item} type="checkbox" className="category__option" />
          {item}
        </label>
      </li>
    ));
  };

  const content = renderCategories(categories.category);

  return (
    <div className="category filters__item">
      {/* <h2 className="category__heading">Category</h2> */}
      <ul className="category__list">
        {content}
        {/* <li className="category__wrapper">
          <label htmlFor="item" className="category__label">
            <input id="item" type="checkbox" className="category__option" />
            Clothes
          </label>
        </li> */}
      </ul>
    </div>
  );
}

export default Category;
