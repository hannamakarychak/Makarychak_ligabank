import { Fragment, useState } from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';

import NumericInput from '../numeric-input/numeric-input';
import InputRange from '../input-range/input-range';

import './form.scss';

const DEFAULT_PERCENTAGE = 10;

const Form = () => {
  const [goal, setGoal] = useState('mortgage');
  const [price, setPrice] = useState(2000000);
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [initialPaymentPercentage, setInitialPaymentPercentage] = useState(DEFAULT_PERCENTAGE);
  const [initialPayment, setInitialPayment] = useState((price * initialPaymentPercentage) / 100);
  const [isUserFormVisible, setIsUserFormVisible] = useState(false);
  const [loanPeriod, setLoanPeriod] = useState(5);

  const isGoalSelected = goal !== 'default';
  const isFinalOfferVisible = isGoalSelected && true;

  const handleChangePrice = (newPrice) => {
    setPrice(newPrice);
    setInitialPayment((newPrice * DEFAULT_PERCENTAGE) / 100);
    setInitialPaymentPercentage(DEFAULT_PERCENTAGE);
    setIsPriceValid(true);
  };

  const handleChangeInitialPayment = (newInitialPayment) => {
    setInitialPayment(newInitialPayment);
    setInitialPaymentPercentage((newInitialPayment / price) * 100);
  };

  const handleChangeInitialPaymentPercentage = (newPercentage) => {
    setInitialPaymentPercentage(newPercentage);
    setInitialPayment(Math.round((newPercentage * price) / 100));
  };

  const handleValidatePrice = () => {
    const isValid = !isNaN(parseInt(price, 10)) && price >= 1200000 && price <= 25000000;
    setIsPriceValid(isValid);
  };

  const handleValidateInitialPayment = () => {
    const isInitialPaymentValid = initialPayment / price >= 0.1;
    if (isInitialPaymentValid) {
      return;
    }

    handleChangeInitialPayment((price * DEFAULT_PERCENTAGE) / 100);
  };

  const handleValidateLoanPeriod = () => {
    const isLoanPeriodValid = !isNaN(parseInt(loanPeriod, 10));
    if (!isLoanPeriodValid || loanPeriod < 5) {
      setLoanPeriod(5);
    } else if (loanPeriod > 30) {
      setLoanPeriod(30);
    }
  };

  return (
    <div className="form">
      <form
        className="form__top"
        onSubmit={(e) => {
          e.preventDefault();

          console.log('submitted');
        }}
      >
        <div className="form__col">
          <h3 className="form__heading" id="goal">
            Шаг 1. Цель кредита
          </h3>
          <Listbox
            aria-labelledby="goal"
            value={goal}
            onChange={setGoal}
            className="form__listbox"
            arrow={
              <svg width="18" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m1 1 8 8 8-8" stroke="#1F1E25" strokeWidth="2" />
              </svg>
            }
          >
            <ListboxOption value="default" className="form__option visually-hidden">
              Выберите цель кредита
            </ListboxOption>
            <ListboxOption value="mortgage">Ипотечное кредитование</ListboxOption>
            <ListboxOption value="autoloan">Автомобильное кредитование</ListboxOption>
          </Listbox>
          {isGoalSelected && (
            <Fragment>
              <h3 className="form__heading">Шаг 2. Введите параметры кредита</h3>
              <span className="form__label">Стоимость недвижимости</span>
              <NumericInput
                onBlur={handleValidatePrice}
                className="form__price-selector"
                isValid={isPriceValid}
                value={price}
                onChange={handleChangePrice}
              />
              <div className="form__description">От 1 200 000 до 25 000 000 рублей</div>
              <span className="form__label">Первоначальный взнос</span>
              <InputRange
                className="form__input"
                value={initialPayment}
                rangeValue={initialPaymentPercentage}
                isValid={isPriceValid}
                unit="рублей"
                leftSign={`${Math.round(initialPaymentPercentage)}%`}
                min={10}
                max={100}
                step={5}
                onChange={handleChangeInitialPayment}
                onRangeValueChange={handleChangeInitialPaymentPercentage}
                onBlur={handleValidateInitialPayment}
              />

              <InputRange
                className="form__input"
                value={loanPeriod}
                rangeValue={loanPeriod}
                isValid={isPriceValid}
                unit="лет"
                leftSign="5 лет"
                rightSign="30 лет"
                min={5}
                max={30}
                step={1}
                onChange={setLoanPeriod}
                onRangeValueChange={setLoanPeriod}
                onBlur={handleValidateLoanPeriod}
              />

              <input type="checkbox" value="assets" id="assets" className="form__checkbox" />
              <label htmlFor="assets" className="form__checkbox-label">
                Использовать материнский капитал
              </label>
            </Fragment>
          )}
        </div>
        {isFinalOfferVisible && (
          <div className="form__col">
            <div className="form__offer">
              <h4 className="form__heading">Наше предложение</h4>
              <div className="form__offer-container">
                <div className="form__offer-col">
                  <div className="form__value">1 330 000 рублей</div>
                  <div className="form__text">Сумма ипотеки</div>
                  <div className="form__value">27 868 рублей</div>
                  <div className="form__text">Ежемесячный платеж</div>
                </div>
                <div className="form__offer-col">
                  <div className="form__value">9,40%</div>
                  <div className="form__text">Процентная ставка</div>
                  <div className="form__value">61 929 рублей</div>
                  <div className="form__text">Необходимый доход</div>
                </div>
              </div>
              <button className="form__submit button" onClick={() => setIsUserFormVisible(true)}>
                Оформить заявку
              </button>
            </div>
          </div>
        )}
      </form>
      {isUserFormVisible && (
        <form className="form__bottom">
          <div className="form__application">
            <h3 className="form__heading form__heading--application">Шаг 3. Оформление заявки</h3>
            <div className="form__row">
              <span className="form__application-text">Номер заявки</span>
              <span className="form__application-value">№ 0010</span>
            </div>
            <div className="form__row">
              <span className="form__application-text">Цель кредита</span>
              <span className="form__application-value">Ипотека</span>
            </div>
            <div className="form__row">
              <span className="form__application-text">Стоимость недвижимости</span>
              <span className="form__application-value">2 000 000 рублей</span>
            </div>
            <div className="form__row">
              <span className="form__application-text">Первоначальный взнос</span>
              <span className="form__application-value">200 000 рублей</span>
            </div>
            <div className="form__row">
              <span className="form__application-text">Срок кредитования</span>
              <span className="form__application-value">5 лет</span>
            </div>
            <div>
              <input
                type="text"
                className="form__application-input"
                id="name"
                placeholder="ФИО"
                required
              />
              <input
                className="form__application-input form__application-input--half"
                id="tel"
                placeholder="Телефон"
                type="tel"
                pattern="^\+?7(\d{10})$"
                required
              />
              <input
                className="form__application-input form__application-input--half"
                id="email"
                type="email"
                placeholder="E-mail"
                required
              />
            </div>
            <button className="form__button button">Отправить</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
