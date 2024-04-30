import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAll } from '../../pages/cartPage/cartSlice';
import SearchBar from '../searchBar/SearchBar';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg';
import './Header.scss';

function Header() {
  const quantity = useSelector(selectAll).length;
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__logo-link" to="/">
          <img src={logo} alt="" className="header__logo" />
        </Link>
        <SearchBar />
        <div className="header__buttons">
          <Link className="header__cart" to="/cart">
            <img src={cart} alt="" />
          </Link>
          <div className={`header__badge ${quantity === 0 ? 'inactive' : ''}`}>
            {quantity}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
