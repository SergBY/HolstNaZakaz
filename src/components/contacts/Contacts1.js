import './Contact.css';
import Title from '../title/Title';
import Button from '../button/Button';
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
          <Button btnSize="map" title="Посмотреть на карте"/>
    </div>
  )
}

export default Contacts1;