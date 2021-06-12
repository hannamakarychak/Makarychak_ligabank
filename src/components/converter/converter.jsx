import React from 'react';
import Button from '../button/button';
import Calendar from '../calendar/calendar';
import DoubleArrow from '../double-arrow/double-arrow';
import Input from '../input/input';
import Select from '../select/select';

import './converter.scss';

const Converter = () => {
  const CURRENCIES = ['rub', 'eur', 'usd', 'gbp', 'cny'];
  return (
    <div className="converter">
      <h2 className="converter__heading">Конвертер валют</h2>
      <form
        className="converter__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input name="input-amount" id="input-amount" type="number" label="У меня есть" />
        <Select name="currency" options={CURRENCIES} />
        <DoubleArrow className="converter__arrow" />
        <Input name="input-amount" id="input-amount" type="number" label="Хочу приобрести" />
        <Select name="currency" options={CURRENCIES} />
        <Calendar className="converter__calendar calendar" />
        <Button className="converter__button button button--primary" />
      </form>
    </div>
  );
};

export default Converter;
