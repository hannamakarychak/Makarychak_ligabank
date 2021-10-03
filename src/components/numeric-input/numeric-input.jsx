import classNames from 'classnames';

import './numeric-input.scss';

const NumericInput = ({ value, className, onChange, isValid, onBlur, step }) => {
  return (
    <div
      className={classNames(className, 'numeric-input', { 'numeric-input--invalid': !isValid })}
      onBlur={(e) => {
        // https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
        const currentTarget = e.currentTarget;
        // Check the newly focused element in the next tick of the event loop
        setTimeout(() => {
          // Check if the new activeElement is a child of the original container
          if (!currentTarget.contains(document.activeElement)) {
            // You can invoke a callback or add custom logic here
            onBlur();
          }
        }, 0);
      }}
      tabIndex="-1"
    >
      <button
        onClick={() => onChange(isValid ? parseInt(value - step, 10) : step)}
        className="numeric-input__button"
      >
        -
      </button>
      <input
        className={classNames('numeric-input__field', {
          'numeric-input__field--invalid': !isValid,
        })}
        value={isValid ? value : 'Некорректное значение'}
        type="text"
        onChange={(e) => {
          const numericValue = parseInt(e.target.value, 10);
          onChange(isNaN(numericValue) ? '' : numericValue);
        }}
        onFocus={() => {
          if (!isValid) {
            onChange('');
          }
        }}
      />
      {isValid && <span className="numeric-input__text">рублей</span>}

      <button
        onClick={() => onChange(isValid ? parseInt(value + step, 10) : step)}
        className="numeric-input__button"
      >
        +
      </button>
    </div>
  );
};

export default NumericInput;
