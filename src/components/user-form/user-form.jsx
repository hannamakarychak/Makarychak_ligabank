import { useEffect, useRef } from 'react';
import './user-form.scss';

const UserForm = ({ goal, price, isMortgage, initialPayment, loanPeriod, onSubmit, orderId }) => {
  const nameInputRef = useRef();
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <form
      className="user-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          userName: e.target.username.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
          id: orderId,
        });
      }}
    >
      <div className="user-form__application">
        <h3 className="user-form__heading">Шаг 3. Оформление заявки</h3>
        <div className="user-form__row">
          <span className="user-form__application-text">Номер заявки</span>
          <span className="user-form__application-value">№ {`${orderId}`.padStart(4, '0')}</span>
        </div>
        <div className="user-form__row">
          <span className="user-form__application-text">Цель кредита</span>
          <span className="user-form__application-value">{goal}</span>
        </div>
        <div className="user-form__row">
          <span className="user-form__application-text">
            Стоимость {isMortgage ? 'недвижимости' : 'автомобиля'}
          </span>
          <span className="user-form__application-value">{price} рублей</span>
        </div>
        <div className="user-form__row">
          <span className="user-form__application-text">Первоначальный взнос</span>
          <span className="user-form__application-value">{initialPayment} рублей</span>
        </div>
        <div className="user-form__row user-form__row--last">
          <span className="user-form__application-text">Срок кредитования</span>
          <span className="user-form__application-value">{loanPeriod} лет</span>
        </div>
        <div className="user-form__application-container">
          <input
            type="text"
            className="user-form__application-input"
            id="name"
            placeholder="ФИО"
            required
            ref={nameInputRef}
            name="username"
          />
          <input
            className="user-form__application-input user-form__application-input--half"
            id="tel"
            placeholder="Телефон"
            type="tel"
            pattern="^\+?7(\d{10})$"
            required
            name="phone"
          />
          <input
            className="user-form__application-input user-form__application-input--half"
            id="email"
            type="email"
            placeholder="E-mail"
            required
            name="email"
          />
        </div>
        <button className="user-form__button button">Отправить</button>
      </div>
    </form>
  );
};

export default UserForm;
