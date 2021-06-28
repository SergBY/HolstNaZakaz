import React from 'react';
import './Contact.css';
import Title from '../title/Title';
import {PhoneRF, Adress } from '../../constants';



function Contacts1() {

  return(
    <div className="contacts__contacts">
        <Title titleSize="contacts" title="Контакты"/>
        <p className="contacts__contacts-phone">
          Бесплатный звонок по РФ: <br />
          {PhoneRF}
        </p>
        <p className="contacts__contacts-adress">
          {Adress}
        </p>
        <a className="link__map" href="https://yandex.by/MAPS/?ll=37.739436%2C55.594454&mode=whatshere&whatshere%5Bpoint%5D=37.739213%2C55.595409&whatshere%5Bzoom%5D=18.58&z=16.38" target="_blank" rel="noreferrer">Посмотреть на карте</a>
    </div>
  )
}

export default Contacts1;