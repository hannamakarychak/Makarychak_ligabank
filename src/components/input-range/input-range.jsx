import classNames from 'classnames';
import { Fragment } from 'react';
import { SliderInput, SliderTrack, SliderRange, SliderHandle } from '@reach/slider';

import '@reach/slider/styles.css';
import './input-range.scss';

const InputRange = ({ value, percentage, className, onChange, onPercentageChange }) => {
  return (
    <div className={className}>
      <div className="input-range">
        <input
          type="number"
          className="input-range__field"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
        />
        <span className="input-range__text">рублей</span>
      </div>
      <SliderInput min={10} max={100} step={5} onChange={onPercentageChange} value={percentage}>
        <SliderTrack>
          <SliderRange />
          <SliderHandle />
        </SliderTrack>
      </SliderInput>
      <div className="input-range__percentage">{percentage}</div>
    </div>
  );
};

export default InputRange;
