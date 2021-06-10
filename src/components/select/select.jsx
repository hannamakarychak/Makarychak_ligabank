import React from 'react'
import PropTypes from 'prop-types'

import './select.scss';

const Select = ({name}) => {
  return (
    <select name={name} className={name}>
        <option value="rub">RUB</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="cny">CNY</option>
      </select>
  )
}

Select.propTypes = {
  name: PropTypes.node.isRequired
}

export default Select 
