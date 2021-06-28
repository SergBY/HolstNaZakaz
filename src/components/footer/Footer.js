import React from 'react';
import './Footer.css';
import Title from '../title/Title';
import Social from '../social/Social';
import Contacts1 from '../contacts/Contacts1';
import Contacts2 from '../contacts/Contacts2';
import Worktime from '../worktime/Worktime';

function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer__inner contacts">
        <div className="contacts-column">
        <Contacts1/>
        <Contacts2/>
        </div>
        <div className="contacts-column">
        <Worktime/>
        <div className="contacts__requisites">
          <Title titleSize="contacts" title="Реквизиты"/>
          <a href="#">
            <p className="contacts__text">Скачать реквизиты</p>
          </a>
          <a href="#">
            <p className="contacts__text"><br /></p>
          </a>
          <a href="#">
            <p className="contacts__text">Политика конфиденциальности</p>
          </a>
          <a href="#">
            <p className="contacts__text">Условия публичной оферты</p>
          </a>
          <a href="#">
            <p className="contacts__text">Узнайте о скидках и акциях</p>
          </a>
          <a href="#">
            <p className="contacts__text">Для сотрудничества</p>
          </a>
        </div>
        </div>
        <div className="contacts-column">
          <div className="contacts__pay">
          <Title titleSize="contacts" title="Принимаем к оплате"/>
            <div className="contacts__pay-cards">
              <div className="contacts__pay-card pict-visa"></div>
              <div className="contacts__pay-card pict-master"></div>
              <div className="contacts__pay-card pict-mir"></div>
              <div className="contacts__pay-card pict-yandexmoney"></div>
            </div>
          </div>
          <div className="contacts__delivery">
            <Title titleSize="contacts" title="Доставляем по РФ"/>
            <div className="contacts__delivery-logos">
              <div className="contacts__delivery pict-cdek"></div>
              <div className="contacts__delivery pict-ems"></div>
            </div>
          </div>
          <Social/>
        </div>
      </div>
      <p className="footer__author">
        © Холст на заказ, 2017-2021 | holst-na-zakaz.ru | info@holst-na-zakaz.ru
      </p>
    </footer>
  );
}

export default Footer;
