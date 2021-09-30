import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';

import './numeric-input.scss';

// const INVALID_PRICE = 'Некорректное значение';

const NumericInput = ({ className }) => {
  const [price, setPrice] = useState(2000000);
  const [isInvalid, setIsInvalid] = useState(false);
  console.log(price);

  const handlePriceChange = (e) => setPrice(e.target.value);

  useEffect(() => {
    const newPrice = parseInt(price, 10);
    setIsInvalid(isNaN(newPrice) || newPrice < 1200000 || newPrice > 25000000);
  }, [price]);

  return (
    <div className={classNames(className, 'numeric-input')}>
      <button onClick={() => setPrice(price - 100000)} className="numeric-input__button">
        -
      </button>
      <input className="numeric-input__field" value={price} onChange={handlePriceChange} />
      <span className="numeric-input__text">рублей</span>
      <button onClick={() => setPrice(price + 100000)} className="numeric-input__button">
        +
      </button>
    </div>
  );
};

export default NumericInput;
