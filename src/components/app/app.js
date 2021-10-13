import Footer from '../footer/footer';
import Header from '../header/header';
import Hero from '../hero/hero';
import Offers from '../offers/offers';
import Calculator from '../calculator/calculator';
import Map from '../map/map';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Offers />
      <Calculator />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
