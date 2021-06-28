import React from 'react';
import Button from '../../button/Button';
import './LoginForm.css';


export const LoginForm = (props) => {
  const { onClose }=props;

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
      </div>
    </form>
  )
}
