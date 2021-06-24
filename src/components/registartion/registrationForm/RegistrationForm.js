import React from 'react';
import Button from '../../button/Button';
import './RegistrationForm.css';

export const RegistrationForm = (props) => {
  const { onClose }=props;
  const { register }=props;

  return (
    <form className="registration-form">
      <div className="registration-form__input">
        <div className="registration-form__name">
          <p>Ваше имя:</p>
          <input name="name" type="text" placeholder="Имя"/>
        </div>
        <div className="registration-form__mail">
          <p>Ваш e-mail:</p>
          <input name="email" type="text" placeholder="E-mail"/>
        </div>
        <div className="registration-form__password">
          <p>Пароль (не менее 8 символов):</p>
          <input name="password" type="password" placeholder="Пароль"/>
        </div>
        <div className="registration-form__repassword">
          <p>Повторите пароль:</p>
          <input name="repassword" type="password" placeholder="Пароль"/>
        </div>
      </div>
      <div className="registration-form__btn">
        <Button onClick={ register } btnSize="form" title="Регистрация"/>
        <Button onClick={ onClose } btnSize="form" title="Отмена"/>
      </div>
    </form>
  )
}
