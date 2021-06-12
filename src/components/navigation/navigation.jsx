import React from 'react';

import './navigation.scss';

export const Navigation = ({ className }) => {
  return (
    <nav className={className}>
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
