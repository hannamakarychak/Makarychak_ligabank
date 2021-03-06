import React, { useEffect, useState } from 'react';
import SlickSlider from 'react-slick';
import Container from '../container/container';
import Button from '../button/button';
import Heading from '../heading/heading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './hero.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, nextSlide) => setCurrentSlide(nextSlide),
  };

  useEffect(() => {
    Array.from(document.querySelectorAll('.hero .hero__button')).forEach((buttonElement) => {
      buttonElement.setAttribute('tabindex', '-1');
    });

    document
      .querySelector(`[data-index="${currentSlide}"] .hero__button`)
      ?.setAttribute('tabindex', '0');
  }, [currentSlide]);

  return (
    <section className="hero">
      <SlickSlider {...settings}>
        <div className="hero__slide hero__slide--loan">
          <Container className="hero__slide-container hero__slide-container--main">
            <Heading className="hero__heading" inverted>
              Лига Банк
            </Heading>
            <div className="hero__moto">Кредиты на любой случай</div>
            <Button className="hero__button" isInverted>
              Рассчитать кредит
            </Button>
          </Container>
        </div>
        <div className="hero__slide hero__slide--security">
          <Container className="hero__slide-container hero__slide-container--no-button">
            <Heading className="hero__heading">Лига Банк</Heading>
            <div className="hero__moto hero__moto--inverted">Ваша уверенность в завтрашнем дне</div>
          </Container>
        </div>
        <div className="hero__slide hero__slide--find">
          <Container className="hero__slide-container">
            <Heading className="hero__heading">Лига Банк</Heading>
            <div className="hero__moto hero__moto--inverted">Всегда рядом</div>
            <Button className="hero__button">Найти отделение</Button>
          </Container>
        </div>
      </SlickSlider>
    </section>
  );
};

export default Slider;
