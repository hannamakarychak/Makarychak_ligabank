import React from 'react';
import PropTypes from 'prop-types';

import './select.scss';

const Select = ({ name, options, value, onChange }) => {
  return (
    <select name={name} className="select" onChange={(e) => onChange(e.target.value)} value={value}>
      {options.map((value) => (
        <option value={value} key={`${name + value}`}>
          {value.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  name: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
