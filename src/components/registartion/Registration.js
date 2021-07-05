import React, { useState } from 'react';
import './Registration.css';
import PopUp from '../popUp/PopUp';
import { RegistrationForm } from './registrationForm/RegistrationForm';

function Registration() {
  const [popUpActive, setPopUpActive] = useState(false);

  function handleClose(e) {
    setPopUpActive(false);
    e.preventDefault();
  }

  function handleRegister(e) {
    setRegister();
    setPopUpActive(false);
    e.preventDefault();
  }

  function setRegister() {
    alert("Поздравляем, Вы зарегистрированы!");
  }

  return (
    <>
      <div className="menu__login">
        <button className="menu__registration-btn" onClick={() => setPopUpActive(true)}>Регистрация</button>
      </div>
      <PopUp active={popUpActive} setActive={setPopUpActive}>
        <RegistrationForm onClose={ handleClose }
          register={ handleRegister } />
      </PopUp>
    </>
  )
}


export default Registration;