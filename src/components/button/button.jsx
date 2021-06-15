import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

const Button = ({ className, onClick, children, isInverted = false }) => {
  return (
    <button
      className={classNames('button', className, { 'button--inverted': isInverted })}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isInverted: PropTypes.bool,
};
export default Button;
