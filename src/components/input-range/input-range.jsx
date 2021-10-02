import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { SliderInput, SliderTrack, SliderRange, SliderHandle } from '@reach/slider';

import '@reach/slider/styles.css';
import './input-range.scss';

const InputRange = ({ value, totalValue, className, onChange }) => {
  const [percentage, setPercentage] = useState(10);

  useEffect(() => {
    setPercentage(10);
  }, [totalValue]);

  const handleChangePercentage = (newPercentage) => {
    setPercentage(newPercentage);
    onChange((newPercentage / 100) * totalValue);
  };

  const handleChangeInitialPayment = (e) => {
    const newInitialPayment = parseInt(e.target.value, 10);
    setPercentage((newInitialPayment / totalValue) * 100);
    onChange(newInitialPayment);
  };

  return (
    <Fragment>
      <div className={classNames(className, 'input-range')}>
        <input
          type="number"
          className="input-range__field"
          value={value}
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
