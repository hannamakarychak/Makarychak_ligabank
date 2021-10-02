import classNames from 'classnames';

import './numeric-input.scss';

const NumericInput = ({ value, className, onChange }) => {
  return (
    <div className={classNames(className, 'numeric-input')}>
      <button onClick={() => onChange(value - 100000)} className="numeric-input__button">
        -
      </button>
      <input
        className="numeric-input__field"
        value={value}
        type="number"
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
      />
      <span className="numeric-input__text">рублей</span>
      <button onClick={() => onChange(value + 100000)} className="numeric-input__button">
        +
      </button>
    </div>
  );
};

export default NumericInput;
