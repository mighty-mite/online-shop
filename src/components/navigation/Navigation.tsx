/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navigation.scss';

function Navigation() {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <a className="navigation__link" href="#">
          Home
        </a>
      </li>
      <li className="navigation__item">
        <a className="navigation__link" href="#">
          Shop
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
