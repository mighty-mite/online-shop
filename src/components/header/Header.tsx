import { Link } from 'react-router-dom';
import Burger from '../burger/Burger';
import SearchBar from '../searchBar/SearchBar';
import Navigation from '../navigation/Navigation';

import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg';
import login from '../../assets/login.svg';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Burger />
        <Link className="header__logo-link" to="/">
          <img src={logo} alt="" className="header__logo" />
        </Link>
        <Navigation />
        <SearchBar />
        <div className="header__buttons">
          <Link className="header__cart" to="/cart">
            <img src={cart} alt="" />
          </Link>
          <button aria-label="log-in" type="button" className="header__login">
            <img src={login} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
