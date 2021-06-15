import PropTypes from 'prop-types';

import './navigation.scss';
import classNames from 'classnames';

const Navigation = ({ className }) => {
  return (
    <nav className={classNames('navigation', className)}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            Услуги
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            Рассчитать кредит
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link navigation__link--active" href="/">
            Конвертер валют
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            Контакты
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/">
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
