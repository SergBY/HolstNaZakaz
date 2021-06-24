import React, {useState} from 'react';
import Button from '../../button/Button';
import './LoginForm.css';
import PopUp from '../../popUp/PopUp';
import { RegistrationForm } from '../../registartion/registrationForm/RegistrationForm';


export const LoginForm = (props) => {
  const { onClose }=props;
  // const [popUpActive, setPopUpActive] = useState(false);
  return (
    <form className="login-form">
      <div className="login-form__input">
        <div className="login-form__mail">
          <p>Введите ваш e-mail:</p>
          <input name="email" type="text" placeholder="E-mail"/>
        </div>
        <div className="login-form__password">
          <p>Введите ваш пароль:</p>
          <input name="password" type="password" placeholder="Пароль"/>
        </div>
      </div>
      <div className="login-form--btns">
        <div className="login-form__btn">
          <Button onClick={ onClose } btnSize="form" title="Войти"/>
          <Button onClick={ onClose } btnSize="form" title="Отмена"/>
        </div>
        {/* <a href="#" className="registration">Зарегистрироваться</a> */}
        {/* <div className="menu__login">
          <Button btnSize="small" title="Регистрация" onClick={(e) => {setPopUpActive(true); e.preventDefault()}}/>
        </div>
        <PopUp active={popUpActive} setActive={setPopUpActive}>
          <RegistrationForm onClose={(e) => {setPopUpActive(false); e.preventDefault()}} />
        </PopUp> */}
      </div>
    </form>
  )
}
