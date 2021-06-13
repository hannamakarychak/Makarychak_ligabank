import { Fragment, useState } from 'react';
import Container from './components/container/container';
import Converter from './components/converter/converter';
import ExchangeHistory from './components/exchange-history/exchange-history';
import Header from './components/header/header';
import Hero from './components/hero/hero';

function App() {
  const [history, setHistory] = useState([]);

  const handleSaveClick = (data) => {
    const newHistory = [...history];

    if (newHistory.length >= 10) {
      newHistory.shift();
    }

    newHistory.push(data);
    setHistory(newHistory);
  };

  return (
    <Fragment>
      <Header />
      <Hero />
      <Container>
        <Converter onSave={handleSaveClick} />
        <ExchangeHistory list={[...history].reverse()} onClear={() => setHistory([])} />
      </Container>
    </Fragment>
  );
}

export default App;
