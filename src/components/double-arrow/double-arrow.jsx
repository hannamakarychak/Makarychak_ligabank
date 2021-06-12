import React from 'react';

const DoubleArrow = ({ className }) => {
  return (
    <svg
      className={className}
      width="56"
      height="36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 1L3 9l16 8M3 9h50M37 35l16-8-16-8M53 27H3" stroke="#1F1E25" strokeWidth="2" />
    </svg>
  );
};

export default DoubleArrow;
