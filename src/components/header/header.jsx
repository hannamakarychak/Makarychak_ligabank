import classNames from 'classnames';
import React, { useState } from 'react';
import Burger from '../burger/burger';
import Container from '../container/container';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

import './header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <header className="header">
      <Container className="header__wrapper">
        <Burger className="header__burger" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <Logo className="header__logo" />
        <Navigation
          className={classNames('header__navigation', { 'header__navigation--open': isMenuOpen })}
          isMenuOpen={isMenuOpen}
        />
        <a className="header__login-link" href="/">
          {!isMenuOpen ? (
            <svg
              className="header__login-icon"
              width="20"
              height="22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.222 14.3h2.222v5.5h13.334V2.2H4.444v5.5H2.222V1.1c0-.292.117-.572.326-.778.208-.206.49-.322.785-.322H18.89c.295 0 .577.116.786.322.208.206.325.486.325.778v19.8c0 .292-.117.572-.325.778a1.117 1.117 0 01-.786.322H3.333c-.294 0-.577-.116-.785-.322a1.095 1.095 0 01-.326-.778v-6.6zM8.89 9.9V6.6l5.555 4.4-5.555 4.4v-3.3H0V9.9h8.889z" />
            </svg>
          ) : (
            <svg
              className="header__close header__close--tablet"
              width="15"
              height="15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m1 1 6.5 6.5M14 14 7.5 7.5m0 0L14 1 1 14" stroke="#011C40" strokeWidth="2" />
            </svg>
          )}

          <span className="header__login-text"> Войти в Интернет-банк</span>
        </a>
      </Container>
    </header>
  );
};

export default Header;
