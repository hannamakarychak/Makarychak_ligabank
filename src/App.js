import { Fragment } from 'react';
import Container from './components/container/container';
import Converter from './components/converter/converter';
import ExchangeHistory from './components/exchange-history/exchange-history';
import Header from './components/header/header';
import { currencyData } from './mock';

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Converter />
        <ExchangeHistory list={currencyData} />
      </Container>
    </Fragment>
  );
}

export default App;
