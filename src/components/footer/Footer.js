import './Footer.css';
import Title from '../title/Title';
import Social from '../social/Social';
import Contacts1 from '../contacts/Contacts1';
import Contacts2 from '../contacts/Contacts2';
import Worktime from '../worktime/Worktime';

function Footer() {
  return (
    <footer class="footer wrap">
      <div class="footer__inner contacts">
        <div class="contacts-column">
        <Contacts1/>
        <Contacts2/>
        </div>
        <div class="contacts-column">
        <Worktime/>
        <div class="contacts__requisites">
          <Title titleSize="contacts" title="Реквизиты"/>
          <a href="#">
            <p class="contacts__text">Скачать реквизиты</p>
          </a>
          <a href="#">
            <p class="contacts__text"><br /></p>
          </a>
          <a href="#">
            <p class="contacts__text">Политика конфиденциальности</p>
          </a>
          <a href="#">
            <p class="contacts__text">Условия публичной оферты</p>
          </a>
          <a href="#">
            <p class="contacts__text">Узнайте о скидках и акциях</p>
          </a>
          <a href="#">
            <p class="contacts__text">Для сотрудничества</p>
          </a>
        </div>
        </div>
        <div class="contacts-column">
          <div class="contacts__pay">
          <Title titleSize="contacts" title="Принимаем к оплате"/>
            <div class="contacts__pay-cards">
              <div class="contacts__pay-card pict-visa"></div>
              <div class="contacts__pay-card pict-master"></div>
              <div class="contacts__pay-card pict-mir"></div>
              <div class="contacts__pay-card pict-yandexmoney"></div>
            </div>
          </div>
          <div class="contacts__delivery">
            <Title titleSize="contacts" title="Доставляем по РФ"/>
            <div class="contacts__delivery-logos">
              <div class="contacts__delivery pict-cdek"></div>
              <div class="contacts__delivery pict-ems"></div>
            </div>
          </div>
          <Social/>
        </div>
      </div>
      <p class="footer__author">
        © Холст на заказ, 2017-2021 | holst-na-zakaz.ru | info@holst-na-zakaz.ru
      </p>
    </footer>
      // <header className="header wrap">
      //   <div className="header__inner">
      //     <Logo logo={MainLogo}/>
      //     <Phone mainPhone={MainPhone}/>
      //     <Nav nav={Navigation}/>
      //   </div>
      // </header>
  );
}

export default Footer;
