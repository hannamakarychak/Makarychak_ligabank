import React from 'react';
import Container from '../container/container';

import './hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <Container className="hero__wrapper">
        <h1 className="hero__heading">Лига Банк</h1>
        <div className="hero__moto">Кредиты на любой случай</div>
        <button className="hero__button button button--inverted">Рассчитать кредит</button>
      </Container>
    </section>
  );
};

export default Hero;
