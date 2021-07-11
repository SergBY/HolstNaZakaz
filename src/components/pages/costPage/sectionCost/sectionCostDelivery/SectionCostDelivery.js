import React from 'react';
import Title from '../../../../title/Title';
import './SectionCostDelivery.css';

function SectionCostDelivery() {
  return (
    <div className="delivery">
      <Title titleSize="title-3" title="Завершите оформление заказа"/>
      <form>
        <div className="delivery__inner">
          <label className="delivery__radio">
              Доставка
                <input type="radio" name="radio" onClick={() => {
                    console.log('Hi')}}
                  />
              <div className="delivery__indicator"></div>
          </label>
          <div className="delivery__form">
            <div className="delivery__form--left">
              <input className="delivery__form--tel" name="phone" type="tel" placeholder="Телефон*" required/>
              <input className="delivery__form--promo" name="promo" type="text" placeholder="Промо-код" required/>
            </div>
            <div className="delivery__form--right">
              <div className="delivery__form--right-top"> 
                <input className="delivery__form--address" name="address" type="text" placeholder="Адрес*"/>
                <input className="delivery__form--data" name="date" type="text" placeholder="Дата доставки*"/>
                <input className="delivery__form--time" name="time" type="text" placeholder="С 09:00 до __:__"/>
                {/* <input className="aaa" name="date" type="date" placeholder="Дата доставки*"/>
                <input className="aaa" name="time" type="time" value="13:00" step="900" placeholder="09:00"/> */}
                {/* <input type="text" placeholder="Demo time" step="900" onfocus="this.type='time'"/> */}
              </div>
              <div className="delivery__form--right-top">
                <input className="delivery__form--comment" name="comment" type="text" placeholder="Комментарий"/>
              </div>
            </div>
          </div>
          <label className="delivery__radio">
              Самовывоз
                <input type="radio" name="radio" />
              <div className="delivery__indicator"></div>
          </label>
        </div>
        <label className="delivery__radio">
            Я ознакомлен и согласен с политикой конфиденциальности
              <input type="radio" name="radio" />
            <div className="delivery__indicator"></div>
        </label>
      </form>
    </div>
  )
}

export default SectionCostDelivery
