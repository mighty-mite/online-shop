import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import github from '../../assets/github.svg';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Link to="/" className="footer__link">
          <img src={logo} alt="logo" className="footer__logo" />
        </Link>
        <a
          className="footer__github"
          target="_blank"
          href="https://github.com/mighty-mite"
          rel="noreferrer"
        >
          <img width="30" src={github} alt="" />
        </a>
        <ul className="footer__payment">
          <li className="footer__payment-item" />
          <li className="footer__payment-item" />
          <li className="footer__payment-item" />
          <li className="footer__payment-item" />
          <li className="footer__payment-item" />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
