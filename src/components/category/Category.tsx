import './Category.scss';

function Category() {
  return (
    <div className="category filters__item">
      {/* <h2 className="category__heading">Category</h2> */}
      <ul className="category__list">
        <li className="category__wrapper">
          <label htmlFor="item" className="category__label">
            <input id="item" type="checkbox" className="category__option" />
            Clothes
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Category;
