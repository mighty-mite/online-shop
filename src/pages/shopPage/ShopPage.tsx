import Card from '../../components/card/Card';
import Filters from '../../components/filters.tsx/Filters';

import './ShopPage.scss';

function ShopPage() {
  return (
    <section className="shop">
      <div className="container shop__container">
        <div>
          <Filters />
        </div>
        <div className="shop__cardfield">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
