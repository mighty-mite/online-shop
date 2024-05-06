import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { emptyCart } from '../../pages/cartPage/cartSlice';

import './OrderSummary.scss';

function isValidEmail(email: string) {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}

function isValidName(name: string) {
  const pattern = /^[a-zA-Zа-яА-Я]{2,}$/;
  return pattern.test(name);
}

function isValidPhone(phone: string) {
  const pattern = /^\+7\d{10}$/;
  return pattern.test(phone);
}

function OrderSummary() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const delivery = useSelector((state: RootState) => state.cart.delivery);
  const total = useSelector((state: RootState) => state.cart.total);

  const onTouchPhone = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.value === '') target.value = '+7';
  };

  const onBlurPhone = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.value === '+7' || target.value === '+') target.value = '';

    if (isValidPhone(e.target.value)) {
      setPhone(e.target.value);
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onEmailBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (isValidEmail(e.target.value)) {
      setEmail(e.target.value);
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onNameBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (isValidName(e.target.value)) {
      setName(e.target.value);
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmailValid || !isNameValid || !isPhoneValid) return;
    setEmail('');
    setName('');
    setPhone('');
    localStorage.clear();
    dispatch(emptyCart());
  };

  return (
    <form onSubmit={onSubmitForm} className="summary cartpage__summary">
      <h2 className="summary__heading">Order Summary</h2>
      <div className="summary__subtotal">
        <div className="summary__subtotal-text">Subtotal</div>
        <input
          readOnly
          type="text"
          value={`$${subtotal}`}
          className="summary__subtotal-data"
        />
      </div>
      <div className="summary__delivery">
        <div className="summary__delivery-text">Delivery</div>
        <input
          readOnly
          type="text"
          value={`$${delivery}`}
          className="summary__delivery-data"
        />
      </div>
      <div className="summary__total">
        <div className="summary__total-text">Total</div>
        <input
          readOnly
          value={`$${total}`}
          type="text"
          className="summary__total-data"
        />
      </div>
      <div className="summary__input-wrapper">
        <div className="summary__input-name-wrapper">
          <input
            className="summary__input-name"
            type="text"
            placeholder="Your name"
            required
            minLength={2}
            onBlur={onNameBlur}
            value={name}
            onChange={onNameChange}
          />
          <span className={`summary__name-msg ${isNameValid ? '' : 'active'}`}>
            At least two letters
          </span>
        </div>

        <div className="summary__input-phone-wrapper">
          <input
            className="summary__input"
            type="tel"
            placeholder="+7 XXX XXX XX XX"
            required
            maxLength={12}
            onFocus={onTouchPhone}
            onBlur={onBlurPhone}
            value={phone}
            onChange={onPhoneChange}
          />
          <span
            className={`summary__phone-msg ${isPhoneValid ? '' : 'active'}`}
          >
            Invalid phone
          </span>
        </div>
      </div>
      <div className="summary__input-email-wrapper">
        <input
          className="summary__input-email"
          type="email"
          placeholder="E-mail"
          required
          onBlur={onEmailBlur}
          onChange={onEmailChange}
          value={email}
        />
        <span className={`summary__email-msg ${isEmailValid ? '' : 'active'}`}>
          Invalid email
        </span>
      </div>

      <button className="summary__submit" type="submit">
        Make Order
      </button>
    </form>
  );
}

export default OrderSummary;
