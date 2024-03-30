/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/logo.png';
import github from '../../assets/github.svg';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a href="#" className="footer__link">
          <img src={logo} alt="" className="footer__log" />
        </a>
        <a className="footer__github" href="#">
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
