import { SliderInput, SliderTrack, SliderRange, SliderHandle } from '@reach/slider';

import '@reach/slider/styles.css';
import { getNumberWithSpaces } from '../../utils/numbers';
import './input-range.scss';

const InputRange = ({
  value,
  rangeValue,
  className,
  onChange,
  onRangeValueChange,
  onBlur,
  unit,
  leftSign,
  rightSign,
  step,
  min,
  max,
}) => {
  return (
    <div className={className}>
      <div className="input-range">
        <input
          type="text"
          className="input-range__field"
          value={getNumberWithSpaces(value)}
          onChange={(e) => {
            const numericValue = parseInt(e.target.value.replaceAll(' ', ''), 10);
            onChange(isNaN(numericValue) ? min : numericValue);
          }}
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
        />
        <span className="input-range__text">{unit}</span>
      </div>
      <SliderInput
        min={min}
        max={max}
        step={step}
        onChange={onRangeValueChange}
        value={parseInt(rangeValue, 10)}
        onMouseDown={() => document.body.classList.add('no-select')}
        onMouseUp={() => document.body.classList.remove('no-select')}
      >
        <SliderTrack>
          <SliderRange />
          <SliderHandle />
        </SliderTrack>
      </SliderInput>

      <div className="input-range__description">
        <span className="input-range__sign">{leftSign}</span>
        <span className="input-range__sign">{rightSign}</span>
      </div>
    </div>
  );
};

export default InputRange;
