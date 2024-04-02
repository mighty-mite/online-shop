import { Link } from 'react-router-dom';

import './Navigation.scss';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Link className="navigation__link" to="/">
          Home
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__link" to="/shop">
          Shop
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
