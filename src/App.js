import { Fragment } from 'react';
import Container from './components/container/container';
import Converter from './components/converter/converter';
import ExchangeHistory from './components/exchange-history/exchange-history';
import Header from './components/header/header';

function App() {
  return (
    <Fragment>
      <Container>
        <Converter />
      </Container>
      <Container>
        <Header />
      </Container>
      <Container>
        <ExchangeHistory />
      </Container>
    </Fragment>
  );
}

export default App;
