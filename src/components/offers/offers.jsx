import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import '@reach/tabs/styles.css';

import './offers.scss';

const Offers = () => {
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
        <li className="offers__list-item">Лига Страхование — застрахуем все что захотите</li>
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
      <Tabs>
        <h2 className="visually-hidden">Предложения</h2>
        <TabList className="offers__tablist">
          <Tab className="offers__tab-button offers__tab-button--invest">Вклады</Tab>
          <Tab className="offers__tab-button">Кредиты</Tab>
          <Tab className="offers__tab-button">Страхование</Tab>
          <Tab className="offers__tab-button">Онлайн-сервисы</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{offers[0]}</TabPanel>
          <TabPanel>{offers[1]}</TabPanel>
          <TabPanel>{offers[2]}</TabPanel>
          <TabPanel>{offers[3]}</TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default Offers;
