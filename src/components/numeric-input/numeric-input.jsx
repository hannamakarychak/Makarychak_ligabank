import classNames from 'classnames';

import './numeric-input.scss';

const NumericInput = ({ value, className, onChange, isValid, step, min, max }) => {
  return (
    <div className={classNames(className, 'numeric-input', { 'numeric-input--invalid': !isValid })}>
      <button
        onClick={() => {
          if (value === '') {
            onChange(min);
            return;
          }
          const newValue = parseInt(value - step, 10);
          if (newValue >= min) {
            onChange(newValue);
          }
        }}
        className="numeric-input__button"
      >
        -
      </button>
      <input
        className={classNames('numeric-input__field', {
          'numeric-input__field--invalid': !isValid,
        })}
        value={value}
        type="text"
        onChange={(e) => {
          const numericValue = parseInt(e.target.value, 10);
          onChange(isNaN(numericValue) ? '' : numericValue);
        }}
      />
      {isValid && <span className="numeric-input__text">рублей</span>}

      <button
        onClick={() => {
          if (value === '') {
            onChange(max);
            return;
          }
          const newValue = parseInt(value + step, 10);
          if (newValue <= max) {
            onChange(newValue);
          }
        }}
        className="numeric-input__button"
      >
        +
      </button>
    </div>
  );
};

export default NumericInput;
