import PropTypes from 'prop-types';

import './navigation.scss';
import classNames from 'classnames';

const Navigation = ({ className, isMenuOpen }) => {
  return (
    <nav className={classNames('navigation', className)}>
      <ul
        className={classNames(
          { 'navigation__list--mobile': isMenuOpen },
          { navigation__list: true }
        )}
      >
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
        {isMenuOpen && (
          <li className="navigation__item navigation__item--mobile">
            <a className="navigation__link" href="/">
              <svg
                className="navigation__login-icon"
                width="20"
                height="22"
                fill="#1F1E25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.222 14.3h2.222v5.5h13.334V2.2H4.444v5.5H2.222V1.1c0-.292.117-.572.326-.778.208-.206.49-.322.785-.322H18.89c.295 0 .577.116.786.322.208.206.325.486.325.778v19.8c0 .292-.117.572-.325.778a1.117 1.117 0 01-.786.322H3.333c-.294 0-.577-.116-.785-.322a1.095 1.095 0 01-.326-.778v-6.6zM8.89 9.9V6.6l5.555 4.4-5.555 4.4v-3.3H0V9.9h8.889z" />
              </svg>
              Войти в Интернет-банк
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Navigation;
