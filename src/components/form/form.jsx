import { useState } from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import '@reach/listbox/styles.css';

import './form.scss';
import NumericInput from '../numeric-input/numeric-input';
import InputRange from '../input-range/input-range';

const Form = () => {
  const [goal, setGoal] = useState();
  const [price, setPrice] = useState(2000000);

  return (
    <form
      className="form"
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
          <ListboxOption value="mortgage">Ипотечное кредитование</ListboxOption>
          <ListboxOption value="autoloan">Автомобильное кредитование</ListboxOption>
        </Listbox>
        <h3 className="form__heading">Шаг 2. Введите параметры кредита</h3>
        <span className="form__label">Стоимость недвижимости</span>
        <NumericInput className="form__price-selector" onChange={setPrice} />
        <div className="form__description">От 1 200 000 до 25 000 000 рублей</div>
        <span className="form__label">Первоначальный взнос</span>
        <InputRange price={price} onChange={(payment) => console.log(payment)} />
      </div>
    </form>
  );
};

export default Form;
