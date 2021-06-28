import React, { useState } from 'react';
import './Registration.css';
import PopUp from '../popUp/PopUp';
import { RegistrationForm } from './registrationForm/RegistrationForm';

function Registration() {
  const [popUpActive, setPopUpActive] = useState(false);

  function setRegister() {
    alert("Поздравляем, Вы зарегистрированы!");
  }
  return (
    <>
      <div className="menu__login">
        <button className="menu__registration-btn" onClick={() => setPopUpActive(true)}>Регистрация</button>
      </div>
      <PopUp active={popUpActive} setActive={setPopUpActive}>
        <RegistrationForm onClose={(e) => { setPopUpActive(false); e.preventDefault() }}
          register={(e) => { setRegister(); setPopUpActive(false); e.preventDefault() }} />
      </PopUp>
    </>
  )
}


export default Registration;