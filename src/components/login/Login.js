import React, {useState} from 'react';
import './login.css';
import Modal from '../popUp/PopUp';
import { LoginForm } from './loginForm/LoginForm';

function Login() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className="menu__login">
        <button className="menu__login-btn" onClick={() => setModalActive(true)}>Войти</button>
        {/* <button className="menu__registration-btn" href="#">Регистрация</button> */}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <LoginForm/>
      </Modal>
    </>
  ) 
}

export default Login;