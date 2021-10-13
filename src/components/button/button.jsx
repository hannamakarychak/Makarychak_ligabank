import React from 'react';
import classNames from 'classnames';

import './button.scss';

const Button = ({ className, onClick, children, isInverted = false, ...props }) => {
  return (
    <button
      className={classNames('button', className, { 'button--inverted': isInverted })}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
