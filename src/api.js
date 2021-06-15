import dayjs from 'dayjs';

import { CURRENCIES } from './constants';

export const DATE_FORMAT = 'YYYY-MM-DD';
const BASE_URL = 'https://api.exchangerate.host';

export const getExchangeRates = (base) => {
  const endDate = dayjs().format(DATE_FORMAT);
  const startDate = dayjs().subtract(6, 'day').format(DATE_FORMAT);
  const symbols = CURRENCIES.join(',');
  const requestURL = `${BASE_URL}/timeseries?start_date=${startDate}&end_date=${endDate}&base=${base}&symbols=${symbols}`;

  return fetch(requestURL)
    .then((response) => response.json())
    .then((json) => json.rates);
};
