import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ className }) => {
  return (
    <button className={className} type="submit">
      Сохранить результат
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
};
export default Button;
