import React, { useState } from 'react';
import { CURRENCIES } from '../../constants';
import Button from '../button/button';
import Calendar from '../calendar/calendar';
import DoubleArrow from '../double-arrow/double-arrow';
import Input from '../input/input';
import Select from '../select/select';

import './converter.scss';

const TEMP_RATE = 1.5;

const Converter = ({ onSave }) => {
  const [baseAmount, setBaseAmount] = useState('');
  const [resultAmount, setResultAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('RUB');
  const [resultCurrency, setResultCurrency] = useState('RUB');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChangeBaseAmount = (value) => {
    setBaseAmount(value);
    setResultAmount(value * TEMP_RATE);
  };

  const handleChangeResultAmount = (value) => {
    setResultAmount(value);
    setBaseAmount(value / TEMP_RATE);
  };

  const handleChangeBaseCurrency = (currency) => {
    setBaseCurrency(currency);
  };

  const handleChangeResultCurrency = (currency) => {
    setResultCurrency(currency);
  };

  const handleChangeSelectedDate = (date) => {
    setSelectedDate(date);
  };

  const handleSaveClick = () => {
    onSave({
      baseAmount,
      resultAmount,
      baseCurrency,
      resultCurrency,
      date: selectedDate,
      id: Date.now(),
    });
  };

  return (
    <div className="converter">
      <h2 className="converter__heading">Конвертер валют</h2>
      <form
        className="converter__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          name="base-amount"
          id="base-amount"
          type="number"
          label="У меня есть"
          value={baseAmount}
          onChange={handleChangeBaseAmount}
        />
        <Select
          name="base-currency"
          options={CURRENCIES}
          value={baseCurrency}
          onChange={handleChangeBaseCurrency}
        />
        <DoubleArrow className="converter__arrow" />
        <Input
          name="result-amount"
          id="result-amount"
          type="number"
          label="Хочу приобрести"
          value={resultAmount}
          onChange={handleChangeResultAmount}
        />
        <Select
          name="result-currency"
          options={CURRENCIES}
          value={resultCurrency}
          onChange={handleChangeResultCurrency}
        />
        <Calendar
          className="converter__calendar"
          value={selectedDate}
          onChange={handleChangeSelectedDate}
        />
        <Button className="converter__button button button--primary" onClick={handleSaveClick} />
      </form>
    </div>
  );
};

export default Converter;
