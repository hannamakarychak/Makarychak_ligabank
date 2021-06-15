import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './bottom-navigation.scss';

const BottomNavigation = ({ className }) => {
  return (
    <nav className={classNames('bottom-navigation', className)}>
      <ul className="bottom-navigation__list">
        <li className="bottom-navigation__item">
          <a className="bottom-navigation__link" href="/">
            Услуги
          </a>
        </li>
        <li className="bottom-navigation__item">
          <a className="bottom-navigation__link" href="/">
            Рассчитать кредит
          </a>
        </li>
        <li className="bottom-navigation__item">
          <a className="bottom-navigation__link" href="/">
            Контакты
          </a>
        </li>
        <li className="bottom-navigation__item">
          <a className="bottom-navigation__link" href="/">
            Задать вопрос
          </a>
        </li>
      </ul>
    </nav>
  );
};

BottomNavigation.propTypes = {
  className: PropTypes.string.isRequired,
};

export default BottomNavigation;
