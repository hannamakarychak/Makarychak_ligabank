import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { SliderInput, SliderTrack, SliderRange, SliderHandle } from '@reach/slider';
import '@reach/slider/styles.css';

import './input-range.scss';

const InputRange = ({ className, price, onChange }) => {
  const [percentage, setPercentage] = useState(10);
  const [initialPayment, setInitialPayment] = useState(price * 0.1);
  useEffect(() => {
    onChange(initialPayment);
  }, [initialPayment, onChange]);

  const handleChangePercentage = (newPercentage) => {
    setPercentage(newPercentage);
    setInitialPayment((newPercentage / 100) * price);
  };

  const handleChangeInitialPayment = (e) => {
    const newInitialPayment = parseInt(e.target.value, 10);
    setInitialPayment(newInitialPayment);
    setPercentage((newInitialPayment / price) * 100);
  };

  return (
    <Fragment>
      <div className={classNames(className, 'input-range')}>
        <input
          type="number"
          className="input-range__field"
          value={initialPayment}
          onChange={handleChangeInitialPayment}
        />
        <span className="input-range__text">рублей</span>
      </div>
      <SliderInput min={10} max={100} step={5} onChange={handleChangePercentage} value={percentage}>
        <SliderTrack>
          <SliderRange />
          <SliderHandle />
        </SliderTrack>
      </SliderInput>
    </Fragment>
  );
};

export default InputRange;
