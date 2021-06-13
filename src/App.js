import { Fragment } from 'react';
import Container from './components/container/container';
import Converter from './components/converter/converter';
import ExchangeHistory from './components/exchange-history/exchange-history';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import { currencyData } from './mock';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Container>
        <Converter />
        <ExchangeHistory list={currencyData} />
      </Container>
    </Fragment>
  );
}

export default App;
