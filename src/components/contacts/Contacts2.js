import React from 'react';
import './Contact.css';
import {Whatsapp, PhoneMoscow, PhoneSPB, Email, Skype } from '../../constants';

function Contacts2() {
  return(
    <div className="contacts__contacts">
        <div className="contacts__contacts-pictogram">
          <div className="contacts__pict pict-whatsapp"></div>
          <p className="contacts__text">{Whatsapp}</p>
        </div>
        <div className="contacts__contacts-pictogram">
          <div className="contacts__pict pict-telepphone"></div>
          <p className="contacts__text">{PhoneMoscow}</p>
        </div>
        <div className="contacts__contacts-pictogram">
          <div className="contacts__pict pict-telepphone"></div>
          <p className="contacts__text">{PhoneSPB}</p>
        </div>
        <div className="contacts__contacts-pictogram">
          <div className="contacts__pict pict-email"></div>
          <p className="contacts__text">{Email}</p>
        </div>
        <div className="contacts__contacts-pictogram">
          <div className="contacts__pict pict-skype"></div>
          <p className="contacts__text">{Skype}</p>
        </div>
    </div>
  )
}

export default Contacts2;