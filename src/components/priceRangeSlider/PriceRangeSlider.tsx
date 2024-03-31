import './Price.scss';

export default function PriceRangeSlider() {
  return (
    <div className="filters__item price">
      <h2 className="price__heading">Filter by price</h2>
      <div className="price__container">
        <input type="text" className="price__input price__from" />
        <input type="text" className="price__input price__to" />
      </div>
    </div>
  );
}
