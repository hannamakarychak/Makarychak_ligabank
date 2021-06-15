import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { DATE_FORMAT, getExchangeRates } from '../../api';
import { CURRENCIES } from '../../constants';
import Button from '../button/button';
import Calendar from '../calendar/calendar';
import DoubleArrow from '../double-arrow/double-arrow';
import Input from '../input/input';
import Select from '../select/select';

import './converter.scss';

const DEFAULT_RATE = 1;

const Converter = ({ onSave }) => {
  const [baseAmount, setBaseAmount] = useState(0);
  const [resultAmount, setResultAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState('RUB');
  const [resultCurrency, setResultCurrency] = useState('RUB');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [rates, setRates] = useState(null);

  const selectedDateFormatted = dayjs(selectedDate).format(DATE_FORMAT);
  const currentRate = rates ? rates[selectedDateFormatted][resultCurrency] : DEFAULT_RATE;

  useEffect(() => {
    getExchangeRates(baseCurrency).then((rates) => {
      setRates(rates);
    });
  }, [baseCurrency]);

  useEffect(() => {
    setResultAmount(baseAmount * currentRate);
  }, [currentRate, baseAmount]);

  const handleChangeResultAmount = (value) => {
    setResultAmount(value);
    setBaseAmount(value / currentRate);
  };

  const handleSaveClick = () => {
    onSave({
      baseAmount: +baseAmount,
      resultAmount: +resultAmount,
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
          onChange={setBaseAmount}
        />
        <Select
          name="base-currency"
          options={CURRENCIES}
          value={baseCurrency}
          onChange={setBaseCurrency}
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
          onChange={setResultCurrency}
        />
        <Calendar className="converter__calendar" value={selectedDate} onChange={setSelectedDate} />
        <Button className="converter__button" onClick={handleSaveClick}>
          Сохранить результат
        </Button>
      </form>
    </div>
  );
};

export default Converter;
