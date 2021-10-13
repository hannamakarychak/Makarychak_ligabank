import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

import { useWindowSize } from '../../hooks/use-window-size/use-window-size';
import Container from '../container/container';
import { BREAKPOINTS } from '../../constants';

import '@reach/tabs/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './offers.scss';

const Offers = () => {
  const size = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, nextSlide) => setCurrentSlide(nextSlide),
  };

  useEffect(() => {
    Array.from(document.querySelectorAll('.offers .focusable')).forEach((buttonElement) => {
      buttonElement.setAttribute('tabindex', '-1');
    });

    document
      .querySelector(`[data-index="${currentSlide}"] .focusable`)
      ?.setAttribute('tabindex', '0');
  }, [currentSlide]);

  const offers = [
    <div className="offers__item offers__item--invest" key="offer-invest">
      <div className="offers__moto offers__moto--invest">
        Вклады Лига Банка – это выгодная инвестиция в свое будущее
      </div>
      <ul className="offers__list">
        <li className="offers__list-item">Проценты по вкладам до 7%</li>
        <li className="offers__list-item">Разнообразные условия</li>
        <li className="offers__list-item">
          Возможность ежемесячной капитализации или вывод процентов на банковскую карту
        </li>
      </ul>
      <button className="offers__button focusable button">Узнать подробнее</button>
    </div>,
    <div className="offers__item offers__item--loan" key="offer-loan">
      <div className="offers__moto offers__moto--loan">Лига Банк выдает кредиты под любые цели</div>
      <ul className="offers__list">
        <li className="offers__list-item">Ипотечный кредит</li>
        <li className="offers__list-item">Автокредит</li>
        <li className="offers__list-item">Потребительский кредит</li>
      </ul>
      <div className="offers__text">
        Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим &nbsp;
        <a className="offers__link focusable" href="/">
          кредитным калькулятором
        </a>
      </div>
    </div>,
    <div className="offers__item offers__item--insurance" key="offer-insurance">
      <div className="offers__moto offers__moto--insurance">
        Лига Страхование — застрахуем все что захотите
      </div>
      <ul className="offers__list">
        <li className="offers__list-item">Автомобильное страхование</li>
        <li className="offers__list-item">Страхование жизни и здоровья</li>
        <li className="offers__list-item">Страхование недвижимости</li>
      </ul>
      <button className="offers__button focusable button">Узнать подробнее</button>
    </div>,
    <div className="offers__item offers__item--online" key="offer-online">
      <div className="offers__moto offers__moto--online">
        Лига Банк — это огромное количество онлайн-сервисов для вашего удобства
      </div>
      <ul className="offers__list">
        <li className="offers__list-item">
          Мобильный банк, <br></br> который всегда под рукой
        </li>
        <li className="offers__list-item">
          Приложение Лига-проездной позволит вам оплачивать билеты по всему миру
        </li>
      </ul>
      <button className="offers__button focusable button">Узнать подробнее</button>
    </div>,
  ];

  return (
    <section className="offers">
      <Container className="offers__container">
        {size.width >= BREAKPOINTS.Desktop ? (
          <Tabs>
            <h2 className="visually-hidden">Предложения</h2>
            <TabList className="offers__tablist">
              <Tab className="offers__tab-button offers__tab-button--invest">Вклады</Tab>
              <Tab className="offers__tab-button offers__tab-button--loan">Кредиты</Tab>
              <Tab className="offers__tab-button offers__tab-button--insurance">Страхование</Tab>
              <Tab className="offers__tab-button offers__tab-button--online">Онлайн-сервисы</Tab>
            </TabList>
            <TabPanels>
              {offers.map((el) => (
                <TabPanel tabIndex="-1" key={el.key}>
                  {el}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        ) : (
          <Slider {...settings}>{offers}</Slider>
        )}
      </Container>
    </section>
  );
};

export default Offers;
