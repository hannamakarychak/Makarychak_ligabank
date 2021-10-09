import classNames from 'classnames';
import React, { useState } from 'react';
import Burger from '../burger/burger';
import Container from '../container/container';
import LoginPopup from '../login-popup/login-popup';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

import './header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const handleOpenLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const handleLogin = (loginData) => {
    localStorage.setItem('loginData', JSON.stringify(loginData));
    setIsLoginPopupOpen(false);
  };

  return (
    <header className={classNames('header', { 'header--full-screen': isMenuOpen })}>
      <Container className="header__wrapper">
        <Burger className="header__burger" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <Logo className="header__logo" />
        <Navigation
          className={classNames('header__navigation', { 'header__navigation--open': isMenuOpen })}
          isMenuOpen={isMenuOpen}
        />

        {isMenuOpen ? (
          <button className="header__navigation-close" onClick={() => setIsMenuOpen(false)}>
            <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m1 1 6.5 6.5M14 14 7.5 7.5m0 0L14 1 1 14" stroke="#011C40" strokeWidth="2" />
            </svg>
          </button>
        ) : (
          <button className="header__login-link" onClick={handleOpenLoginPopup}>
            <svg
              className="header__login-icon"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.556 10.4H3.11v4h9.333V1.6H3.111v4H1.556V.8c0-.212.081-.416.227-.566A.767.767 0 0 1 2.333 0h10.89c.205 0 .403.084.55.234.145.15.227.354.227.566v14.4a.812.812 0 0 1-.228.566.767.767 0 0 1-.55.234H2.333a.767.767 0 0 1-.55-.234.812.812 0 0 1-.227-.566v-4.8Zm4.666-3.2V4.8l3.89 3.2-3.89 3.2V8.8H0V7.2h6.222Z" />
            </svg>
            <span className="header__login-text">Войти в Интернет-банк</span>
          </button>
        )}
      </Container>
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={handleCloseLoginPopup}
        onSubmit={handleLogin}
      />
    </header>
  );
};

export default Header;
