import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ className, onClick }) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      Сохранить результат
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
