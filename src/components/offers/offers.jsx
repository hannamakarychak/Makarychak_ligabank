import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';
import { useWindowSize } from '../../hooks/use-window-size/use-window-size';
import Slider from 'react-slick';
// import Container from '../container/container';
// import Button from '../button/button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './offers.scss';

const Offers = () => {
  const size = useWindowSize();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => <div className="ft-slick__dots--custom" />,
  };

  const offers = [
    <div className="offers__item offers__item--invest">
      <div className="offers__moto">Вклады Лига Банка – это выгодная инвестиция в свое будущее</div>
      <ul className="offers__list">
        <li className="offers__list-item">Проценты по вкладам до 7%</li>
        <li className="offers__list-item">Разнообразные условия</li>
        <li className="offers__list-item">
          Возможность ежемесячной капитализации или вывод процентов на банковскую карту
        </li>
      </ul>
      <button className="offers__button button">Узнать подробнее</button>
    </div>,
    <div className="offers__item offers__item--loan">
      <div className="offers__moto">Лига Банк выдает кредиты под любые цели</div>
      <ul className="offers__list">
        <li className="offers__list-item">Ипотечный кредит</li>
        <li className="offers__list-item">Автокредит</li>
        <li className="offers__list-item">Потребительский кредит</li>
      </ul>
      <div className="offers__text">
        Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим &nbsp;
        <a className="offers__link" href="/">
          кредитным калькулятором
        </a>
      </div>
    </div>,
    <div className="offers__item offers__item--insurance">
      <div className="offers__moto">Лига Страхование — застрахуем все что захотите</div>
      <ul className="offers__list">
        <li className="offers__list-item">Автомобильное страхование</li>
        <li className="offers__list-item">Страхование жизни и здоровья</li>
        <li className="offers__list-item">Страхование недвижимости</li>
      </ul>
      <button className="offers__button button">Узнать подробнее</button>
    </div>,
    <div className="offers__item offers__item--online">
      <div className="offers__moto">
        Лига Банк — это огромное количество онлайн-сервисов для вашего удобства
      </div>
      <ul className="offers__list">
        <li className="offers__list-item">Мобильный банк, который всегда под рукой</li>
        <li className="offers__list-item">
          Приложение Лига-проездной позволит вам оплачивать билеты по всему миру
        </li>
      </ul>
      <button className="offers__button button">Узнать подробнее</button>
    </div>,
  ];

  return (
    <section className="offers">
      {size.width >= 1024 ? (
        <Tabs>
          <h2 className="visually-hidden">Предложения</h2>
          <TabList className="offers__tablist">
            <Tab className="offers__tab-button offers__tab-button--invest">Вклады</Tab>
            <Tab className="offers__tab-button offers__tab-button--loan">Кредиты</Tab>
            <Tab className="offers__tab-button offers__tab-button--insurance">Страхование</Tab>
            <Tab className="offers__tab-button offers__tab-button--online">Онлайн-сервисы</Tab>
          </TabList>
          <TabPanels>
            {offers.map((el, index) => (
              <TabPanel key={el + index}>{el}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      ) : (
        <Slider {...settings}>{offers}</Slider>
      )}
    </section>
  );
};

export default Offers;
