import React, {useState} from 'react';
import './login.css';
import PopUp from '../popUp/PopUp';
import { LoginForm } from './loginForm/LoginForm';

function Login() {
  const [popUpActive, setPopUpActive] = useState(false);

  function handleClose(e) {
    setPopUpActive(false);
    e.preventDefault();
  }

  return (
    <>
      <div className="menu__login">
        <button className="menu__login-btn" onClick={() => setPopUpActive(true)}>Войти</button>
      </div>
      <PopUp active={popUpActive} setActive={setPopUpActive}>
        <LoginForm onClose={ handleClose }/>
      </PopUp>
    </>
  ) 
}

export default Login;