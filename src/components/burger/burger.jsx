import classNames from 'classnames';

const Burger = ({ className, onClick }) => {
  return (
    <svg
      className={classNames(className, 'burger')}
      width="16"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M0 1h16M0 6h16M0 11h16" stroke="#1F1E25" strokeLinejoin="round" />
    </svg>
  );
};

export default Burger;
