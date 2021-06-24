import React, {useState} from 'react';
import './login.css';
import PopUp from '../popUp/PopUp';
import { LoginForm } from './loginForm/LoginForm';

function Login() {
  const [modalActive, setPopUpActive] = useState(false);
  return (
    <>
      <div className="menu__login">
        <button className="menu__login-btn" onClick={() => setPopUpActive(true)}>Войти</button>
        {/* <button className="menu__registration-btn" href="#">Регистрация</button> */}
      </div>
      <PopUp active={modalActive} setActive={setPopUpActive}>
        <LoginForm onClose={(e) => {setPopUpActive(false); e.preventDefault()}} />
      </PopUp>
    </>
  ) 
}

export default Login;