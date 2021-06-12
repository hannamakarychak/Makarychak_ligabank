import React from 'react';
import PropTypes from 'prop-types';

import './select.scss';

const Select = ({ name, options }) => {
  return (
    <select name={name} className="select">
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
};

export default Select;
