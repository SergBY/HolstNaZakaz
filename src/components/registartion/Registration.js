import React, {useState} from 'react';
import './Registration.css';
import Modal from '../popUp/PopUp';
import { RegistrationForm } from './registrationForm/RegistrationForm';

function Registration() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className="menu__login">
        <button className="menu__registration-btn" onClick={() => setModalActive(true)}>Регистрация</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <RegistrationForm/>
      </Modal>
    </>
  ) 
}

export default Registration;