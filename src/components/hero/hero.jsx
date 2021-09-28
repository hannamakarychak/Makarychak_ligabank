import React from 'react';
import Slider from 'react-slick';
import Container from '../container/container';
import Button from '../button/button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './hero.scss';
import Heading from '../heading/heading';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 4000,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom" />,
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        <div className="hero__slider hero__slider--1">
          <Container className="hero__wrapper hero__wrapper--main">
            <Heading className="hero__heading" inverted>
              Лига Банк
            </Heading>
            <div className="hero__moto">Кредиты на любой случай</div>
            <Button className="hero__button" isInverted>
              Рассчитать кредит
            </Button>
          </Container>
        </div>
        <div className="hero__slider hero__slider--2">
          <Container className="hero__wrapper hero__wrapper--no-button">
            <Heading className="hero__heading">Лига Банк</Heading>
            <div className="hero__moto hero__moto--inverted">Ваша уверенность в завтрашнем дне</div>
          </Container>
        </div>
        <div className="hero__slider hero__slider--3">
          <Container className="hero__wrapper">
            <Heading className="hero__heading">Лига Банк</Heading>
            <div className="hero__moto hero__moto--inverted">Всегда рядом</div>
            <Button className="hero__button">Найти отделение</Button>
          </Container>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
