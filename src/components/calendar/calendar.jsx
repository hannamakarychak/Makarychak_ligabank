import React, { forwardRef, Fragment, useState } from 'react'
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types'

import "react-datepicker/dist/react-datepicker.css";
import './calendar.scss';

const Calendar = ({className}) => {
  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={className} onClick={onClick} ref={ref}>
      {value}
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="44" fill="none"><path d="M1 14.183h39M8 1l.09 9.742M33 1v10m7 29V9a3 3 0 00-3-3H4a3 3 0 00-3 3v31a3 3 0 003 3h33a3 3 0 003-3z" stroke="#000"/><path d="M5 19h3m4.09 0h3m4.092 0h3m4.091 0h3m4.09 0h3M5 25h3m4.09 0h3m4.092 0h3m4.091 0h3m4.09 0h3M5 31h3m4.09 0h3m4.092 0h3m4.091 0h3m4.09 0h3M5 37h3m4.09 0h3m4.092 0h3m4.091 0h3m4.09 0h3" stroke="#2C36F2" strokeWidth="3"/></svg>
    </button>
  ));
  
  return (
    <Fragment>
      <DatePicker 
        dateFormat="dd.MM.yyyy"
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        customInput={<CustomInput/>}
      />
    </Fragment>
  )
}

Calendar.propTypes = {
  className: PropTypes.string.isRequired
}

export default Calendar
