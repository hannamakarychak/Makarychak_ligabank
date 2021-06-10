import React from 'react';
import Button from '../button/button';
import Calendar from '../calendar/calendar';
import DoubleArrow from '../double-arrow/double-arrow';
import Input from '../input/input';
import Select from '../select/select';

import './converter.scss';

const Converter = () => {
 return (
     <form className="converter">
      <Input name="input-amount" id="input-amount" type="number" label="У меня есть"/>
      <Select name="currency"/>
      <DoubleArrow className="converter__arrow"/>
      <Input name="input-amount" id="input-amount" type="number" label="Хочу приобрести"/>
      <Select name="currency"/>
      <Calendar className="converter__calendar calendar"/>
      <Button className="converter__button button button--primary"/>
    </form>
 )
}

export default Converter
