import { Fragment } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Offers from './components/offers/offers';
import Calculator from './components/calculator/calculator';
import Map from './components/map/map';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Offers />
      <Calculator />
      <Map />
      <Footer />
    </Fragment>
  );
}

export default App;
