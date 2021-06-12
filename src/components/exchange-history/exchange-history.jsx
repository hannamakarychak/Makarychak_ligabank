import React from 'react';

import './exchange-history.scss';

const ExchangeHistory = ({ list }) => {
  return (
    <div className="exchange-history">
      <h3 className="exchange-history__heading">История конвертация</h3>
      <ul className="exchange-history__list">
        <div className="exchange-history__col">
          {list.map((item) => (
            <li className="exchange-history__item">
              <span className="exchange-history__date">{item.date}</span>
              <span className="exchange-history__from">
                {item.inputAmount} {item.inputCurrency}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="18" fill="none">
                <path d="M27.2 17L40 9 27.2 1M40 9H0" stroke="#1F1E25" />
              </svg>
              <span className="exchange-history__to">
                {item.resultAmount}
                {item.resultCurrency}
              </span>
            </li>
          ))}
        </div>
        <svg width="10" height="298" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <path stroke="#C1C2CA" d="M5.459.002l-.959 289" />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="9.959"
              height="297.003"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
        <div className="exchange-history__col">
          {list.map((item) => (
            <li className="exchange-history__item">
              <span className="exchange-history__date">{item.date}</span>
              <span className="exchange-history__from">
                {item.inputAmount} {item.inputCurrency}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="18" fill="none">
                <path d="M27.2 17L40 9 27.2 1M40 9H0" stroke="#1F1E25" />
              </svg>
              <span className="exchange-history__to">
                {item.resultAmount}
                {item.resultCurrency}
              </span>
            </li>
          ))}
        </div>
      </ul>
      <button className="exchange-history__button button button--primary">Очистить историю</button>
    </div>
  );
};

export default ExchangeHistory;
