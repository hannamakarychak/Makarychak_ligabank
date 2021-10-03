import { useRef, useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import Logo from '../logo/logo';

import './login-popup.scss';

const LoginPopup = ({ isOpen, onClose, onSubmit }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const inputRef = useRef();

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onClose}
      className="login-popup"
      initialFocusRef={inputRef}
      aria-label="Логин"
    >
      <div className="login-popup__top">
        <Logo hasMoto />
        <button className="login-popup__close" onClick={onClose}>
          <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m1 1 16 16m0-16L1 17"
              stroke="#1F1E25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <form
        className="login-popup__form"
        onSubmit={(e) => {
          e.preventDefault();

          onSubmit({
            login: e.target.login.value,
            password: e.target.password.value,
          });
        }}
      >
        <label htmlFor="login" className="login-popup__label">
          Логин
        </label>
        <input className="login-popup__input" id="login" name="login" ref={inputRef} />
        <label htmlFor="login" className="login-popup__label">
          Пароль
        </label>
        <input
          className="login-popup__input login-popup__input--password"
          id="password"
          name="password"
          type={isPasswordShown ? 'text' : 'password'}
          onMouseDown={handleShowPassword}
          onMouseUp={handleShowPassword}
        />
        <a href="/" className="login-popup__forget">
          Забыли пароль?
        </a>
        <button className="login-popup__submit button">Войти</button>
      </form>
    </Dialog>
  );
};

export default LoginPopup;
