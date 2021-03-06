import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ type, id, name, label, value, onChange }) => {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="input__field"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      ></input>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;
