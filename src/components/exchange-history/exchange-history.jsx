import { Fragment } from 'react';
import PropTypes from 'prop-types';

import './exchange-history.scss';
import dayjs from 'dayjs';

const ExchangeHistory = ({ list, onClear }) => {
  return (
    <div className="exchange-history">
      <h3 className="exchange-history__heading">История конвертация</h3>
      <ul className="exchange-history__list">
        <div className="exchange-history__col">
          <ListChunk list={list.slice(0, 5)} />
        </div>
        {list.length > 5 && (
          <Fragment>
            <div className="exchange-history__separator" />
            <div className="exchange-history__col">
              <ListChunk list={list.slice(5, 10)} />
            </div>
          </Fragment>
        )}
      </ul>
      <button className="exchange-history__button button button--primary" onClick={onClear}>
        Очистить историю
      </button>
    </div>
  );
};

const ListChunk = ({ list }) => {
  return list.map((item) => (
    <li className="exchange-history__item" key={item.id}>
      <span className="exchange-history__date">{dayjs(item.date).format('DD.MM.YYYY')}</span>
      <span className="exchange-history__from">
        {item.baseAmount} {item.baseCurrency}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="18" fill="none">
        <path d="M27.2 17L40 9 27.2 1M40 9H0" stroke="#1F1E25" />
      </svg>
      <span className="exchange-history__to">
        {item.resultAmount} {item.resultCurrency}
      </span>
    </li>
  ));
};

ExchangeHistory.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
      baseAmount: PropTypes.number.isRequired,
      baseCurrency: PropTypes.string.isRequired,
      resultAmount: PropTypes.number.isRequired,
      resultCurrency: PropTypes.string.isRequired,
    })
  ),
  onClear: PropTypes.func.isRequired,
};

export default ExchangeHistory;
