import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './navigation.scss';

const Navigation = ({ className }) => {
  return (
    <nav className={classNames('navigation', className)}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Услуги
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Рассчитать кредит
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Конвертер валют
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Контакты
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Задать вопрос
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Navigation;
