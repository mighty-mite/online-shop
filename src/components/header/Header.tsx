/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg';
import login from '../../assets/login.svg';
import Burger from '../burger/Burger';
import SearchBar from '../searchBar/SearchBar';
import Navigation from '../navigation/Navigation';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Burger />
        <a href="#">
          <img src={logo} alt="" className="header__logo" />
        </a>
        <Navigation />
        <SearchBar />
        <div className="header__buttons">
          <a className="header__cart" href="#">
            <img src={cart} alt="" />
          </a>
          <button aria-label="log-in" type="button" className="header__login">
            <img src={login} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
