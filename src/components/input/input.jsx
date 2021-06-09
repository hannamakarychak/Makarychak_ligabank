import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({type, id, name, label}) => {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">{label}</label>
      <input type={type} id={id} name={name} className="input__field"></input>
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Input
