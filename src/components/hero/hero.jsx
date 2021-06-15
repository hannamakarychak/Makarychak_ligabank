import React from 'react';
import Container from '../container/container';
import Button from '../button/button';

import './hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <Container className="hero__wrapper">
        <h1 className="hero__heading">Лига Банк</h1>
        <div className="hero__moto">Кредиты на любой случай</div>
        <Button className="hero__button" isInverted>
          Рассчитать кредит
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
