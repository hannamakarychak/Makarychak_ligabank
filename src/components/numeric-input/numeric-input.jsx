import classNames from 'classnames';

import './numeric-input.scss';

// const INVALID_PRICE = 'Некорректное значение';

const NumericInput = ({ value, className, onChange }) => {
  // const [isInvalid, setIsInvalid] = useState(false);

  // useEffect(() => {
  //   const newPrice = parseInt(price, 10);
  //   setIsInvalid(isNaN(newPrice) || newPrice < 1200000 || newPrice > 25000000);
  // }, [price]);

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
