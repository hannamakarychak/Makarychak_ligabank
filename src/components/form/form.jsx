import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';

import NumericInput from '../numeric-input/numeric-input';
import InputRange from '../input-range/input-range';
import { calculateCarLoan, calculateMortgage, getMinIncome } from '../../utils/calculators';

import './form.scss';
import UserForm from '../user-form/user-form';

const DEFAULT_PRICE = 2000000;

// mortage related constants
const MIN_HOUSE_PERCENTAGE = 10;
const MIN_TOTAL_MORTGAGE = 500000;
const MIN_HOUSE_PRICE = 1200000;
const MAX_HOUSE_PRICE = 25000000;
const HOUSE_PRICE_STEP = 100000;
const MIN_MORTGAGE_PERIOD = 5;
const MAX_MORTGAGE_PERIOD = 30;

// car loan
const MIN_CAR_PERCENTAGE = 20;
const MIN_TOTAL_CAR_LOAN = 200000;
const MIN_CAR_PRICE = 500000;
const MAX_CAR_PRICE = 5000000;
const CAR_PRICE_STEP = 50000;
const MIN_CAR_LOAN_PERIOD = 1;
const MAX_CAR_LOAN_PERIOD = 5;

const Form = () => {
  const [goal, setGoal] = useState('default');
  const isMortgage = goal === 'Ипотека';

  const minPercentage = isMortgage ? MIN_HOUSE_PERCENTAGE : MIN_CAR_PERCENTAGE;
  const isGoalSelected = goal !== 'default';

  const [price, setPrice] = useState(DEFAULT_PRICE);
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [initialPaymentPercentage, setInitialPaymentPercentage] = useState(minPercentage);
  const [initialPayment, setInitialPayment] = useState((price * initialPaymentPercentage) / 100);
  const [isUserFormVisible, setIsUserFormVisible] = useState(false);
  const [loanPeriod, setLoanPeriod] = useState(0);
  const [isParentCapitalUsed, setIsParentCapitalUsed] = useState(false);
  const [isCascoNeeded, setIsCascoNeeded] = useState(false);
  const [isInsuranceNeeded, setIsInsuranceNeeded] = useState(false);

  const minPrice = isMortgage ? MIN_HOUSE_PRICE : MIN_CAR_PRICE;
  const maxPrice = isMortgage ? MAX_HOUSE_PRICE : MAX_CAR_PRICE;
  const priceStep = isMortgage ? HOUSE_PRICE_STEP : CAR_PRICE_STEP;
  const minTotal = isMortgage ? MIN_TOTAL_MORTGAGE : MIN_TOTAL_CAR_LOAN;
  const minPeriod = isMortgage ? MIN_MORTGAGE_PERIOD : MIN_CAR_LOAN_PERIOD;
  const maxPeriod = isMortgage ? MAX_MORTGAGE_PERIOD : MAX_CAR_LOAN_PERIOD;

  const handleChangePrice = useCallback(
    (newPrice) => {
      setPrice(newPrice);
      setInitialPayment((newPrice * minPercentage) / 100);
      setInitialPaymentPercentage(minPercentage);
      setIsPriceValid(true);
      setIsUserFormVisible(false);
    },
    [minPercentage]
  );

  useEffect(() => {
    handleChangePrice(DEFAULT_PRICE);
    setLoanPeriod(isMortgage ? MIN_MORTGAGE_PERIOD : MIN_CAR_LOAN_PERIOD);
    setIsUserFormVisible(false);
    setIsParentCapitalUsed(false);
    setIsCascoNeeded(false);
    setIsInsuranceNeeded(false);
  }, [isMortgage, handleChangePrice]);

  const handleChangeInitialPayment = (newInitialPayment) => {
    setInitialPayment(newInitialPayment);
    setInitialPaymentPercentage((newInitialPayment / price) * 100);
    setIsUserFormVisible(false);
  };

  const handleChangeInitialPaymentPercentage = (newPercentage) => {
    setInitialPaymentPercentage(newPercentage);
    setInitialPayment(Math.round((newPercentage * price) / 100));
    setIsUserFormVisible(false);
  };

  const handleValidatePrice = () => {
    const isValid = !isNaN(parseInt(price, 10)) && price >= minPrice && price <= maxPrice;
    setIsPriceValid(isValid);
  };

  const handleValidateInitialPayment = () => {
    const isInitialPaymentValid = initialPayment / price >= 0.1 && initialPayment / price < 1;
    if (isInitialPaymentValid) {
      return;
    }

    handleChangeInitialPayment((price * minPercentage) / 100);
  };

  const handleValidateLoanPeriod = () => {
    const isLoanPeriodValid = !isNaN(parseInt(loanPeriod, 10));
    if (!isLoanPeriodValid || loanPeriod < minPeriod) {
      setLoanPeriod(minPeriod);
    } else if (loanPeriod > maxPeriod) {
      setLoanPeriod(maxPeriod);
    }
  };

  const { interestRate, totalLoan, annuityMonthlyPayment } = isMortgage
    ? calculateMortgage(
        price,
        initialPayment,
        initialPaymentPercentage,
        isParentCapitalUsed,
        loanPeriod
      )
    : calculateCarLoan(price, initialPayment, isCascoNeeded, isInsuranceNeeded, loanPeriod);

  return (
    <div className="form">
      <form
        className="form__top"
        onSubmit={(e) => {
          e.preventDefault();
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
            <ListboxOption value="Ипотека">Ипотечное кредитование</ListboxOption>
            <ListboxOption value="Автокредит">Автомобильное кредитование</ListboxOption>
          </Listbox>
          {isGoalSelected && (
            <Fragment>
              <h3 className="form__heading">Шаг 2. Введите параметры кредита</h3>
              <span className="form__label">
                Стоимость {isMortgage ? 'недвижимости' : 'автомобиля'}
              </span>
              <NumericInput
                onBlur={handleValidatePrice}
                className="form__price-selector"
                isValid={isPriceValid}
                value={price}
                step={priceStep}
                onChange={handleChangePrice}
              />
              <div className="form__description">
                От {minPrice} до {maxPrice} рублей
              </div>
              {isPriceValid && (
                <Fragment>
                  <span className="form__label">Первоначальный взнос</span>
                  <InputRange
                    className="form__input"
                    value={initialPayment}
                    rangeValue={initialPaymentPercentage}
                    isValid={isPriceValid}
                    unit="рублей"
                    leftSign={`${Math.round(initialPaymentPercentage)}%`}
                    min={minPercentage}
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
                    leftSign={`${minPeriod} лет`}
                    rightSign={`${maxPeriod} лет`}
                    min={minPeriod}
                    max={maxPeriod}
                    step={1}
                    onChange={setLoanPeriod}
                    onRangeValueChange={setLoanPeriod}
                    onBlur={handleValidateLoanPeriod}
                  />
                </Fragment>
              )}

              {isMortgage ? (
                <Fragment>
                  <input
                    type="checkbox"
                    value="assets"
                    id="assets"
                    className="form__checkbox"
                    checked={isParentCapitalUsed}
                    onChange={() => setIsParentCapitalUsed(!isParentCapitalUsed)}
                  />
                  <label htmlFor="assets" className="form__checkbox-label">
                    Использовать материнский капитал
                  </label>
                </Fragment>
              ) : (
                <Fragment>
                  <div>
                    <input
                      type="checkbox"
                      value="casco"
                      id="casco"
                      className="form__checkbox"
                      checked={isCascoNeeded}
                      onChange={() => setIsCascoNeeded(!isCascoNeeded)}
                    />
                    <label htmlFor="casco" className="form__checkbox-label">
                      Оформить КАСКО в нашем банке
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="insurance"
                      id="insurance"
                      className="form__checkbox"
                      checked={isInsuranceNeeded}
                      onChange={() => setIsInsuranceNeeded(!isInsuranceNeeded)}
                    />
                    <label htmlFor="insurance" className="form__checkbox-label">
                      Оформить Страхование жизни в нашем банке
                    </label>
                  </div>
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
        {isGoalSelected && isPriceValid && (
          <div className="form__col">
            <div className="form__offer">
              {totalLoan >= minTotal ? (
                <Fragment>
                  <h4 className="form__heading">Наше предложение</h4>
                  <div className="form__offer-container">
                    <div className="form__offer-col">
                      <div className="form__value">{totalLoan} рублей</div>
                      <div className="form__text">
                        Сумма {isMortgage ? 'ипотеки' : 'автокредита'}
                      </div>
                      <div className="form__value">{annuityMonthlyPayment} рублей</div>
                      <div className="form__text">Ежемесячный платеж</div>
                    </div>
                    <div className="form__offer-col">
                      <div className="form__value">{interestRate}%</div>
                      <div className="form__text">Процентная ставка</div>
                      <div className="form__value">
                        {getMinIncome(annuityMonthlyPayment)} рублей
                      </div>
                      <div className="form__text">Необходимый доход</div>
                    </div>
                  </div>
                  <button
                    className="form__submit button"
                    onClick={() => setIsUserFormVisible(true)}
                  >
                    Оформить заявку
                  </button>
                </Fragment>
              ) : (
                <Fragment>
                  <h4 className="form__heading">
                    Наш банк не выдаёт ипотечные кредиты меньше {minTotal} рублей.
                  </h4>
                  <div className="form__text">
                    Попробуйте использовать другие параметры для расчёта.
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        )}
      </form>
      {isUserFormVisible && isPriceValid && (
        <UserForm
          goal={goal}
          price={price}
          isMortgage={isMortgage}
          initialPayment={initialPayment}
          loanPeriod={loanPeriod}
          onSubmit={() => console.log('submiiit')}
        />
      )}
    </div>
  );
};

export default Form;
