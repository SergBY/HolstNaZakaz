import React, { useState } from 'react';
import { HolstSize } from '../../../../constants';
import { HolstSizes } from '../../../../constants';
import Title from '../../../title/Title';
import Button from '../../../button/Button';
import CostPoint from './costPoint/CostPoint';
import FotoSizeImg from './fotoSizeImg/FotoSizeImg';
import RadioBtn from '../../../button/radioButton/RadioButton';
import SectionCostDescription from './sectionCostDescription/SectionCostDescription';
import "./SectionCost.css";


function SectionCost() {

  const [sizeSelected, setSizeSelected] = useState('');

  return (
    <section className="section section__cost wrap">
      <div className="cost__inner">
        <Title titleSize="title-2" title="Расчет стоимости и оформление заказа"/>
        <div className="cost__item">
          <div className="cost__points">
            <div className="cost__points--point">
              <div className="cost__points--title">
                <CostPoint number={1}/>
                <Title titleSize="title-3" title="Выберите фото"/>
              </div>
              <div className="cost__points--item">
                <div className="input__wrapper">
                  <input name="file" type="file" name="file" id="input__file" className="input input__file" multiple></input>
                    <label htmlFor="input__file" className="btn btn--small btn--small-foto">
                        <span className="input__file-button-text">Выбрать фото</span>
                    </label>
                </div>
              </div>
            </div>
            <form className="cost__points--point">
              <div className="cost__points--title">
                <CostPoint number={2}/>
                <Title titleSize="title-3" title="Выберите размер (см)"/>
              </div>
              <div className="cost__points--item">
                {HolstSizes.map(link => (
                  <RadioBtn btnSize="foto-size" title={link.size} key={link.id} onClick={() => setSizeSelected(link.size)}/>
                ))}
              </div>
              <FotoSizeImg fotoSize={sizeSelected}/>
            </form>
            <form className="cost__points--point">
              <div className="cost__points--title">
                <CostPoint number={3}/>
                <Title titleSize="title-3" title="Выберите материал"/>
              </div>
              <div className="cost__points--item">
                <RadioBtn btnSize="small" title="Холст льняной"/>
                <RadioBtn btnSize="small" title="Холст натуральный"/>
              </div>
            </form>
            <form className="cost__points--point">
              <div className="cost__points--title">
                <CostPoint number={4}/>
                <Title titleSize="title-3" title="Дизайн-обработка"/>
              </div>
              <div className="cost__points--item">
                <RadioBtn btnSize="small" title="Без обработки"/>
                <RadioBtn btnSize="small" title="Живопись"/>
                <RadioBtn btnSize="small" title="Дрим-арт"/>
                <RadioBtn btnSize="small" title="Фотоколлаж"/>
                <RadioBtn btnSize="small" title="Портрет маслом"/>
                <RadioBtn btnSize="small" title="Портрет в образе"/>
                <RadioBtn btnSize="small" title="Фотомазайка"/>
                <RadioBtn btnSize="small" title="Love-is"/>
              </div>
            </form>
            <form className="cost__points--point">
              <div className="cost__points--title">
                <CostPoint number={5}/>
                <Title titleSize="title-3" title="Багетные рамки"/>
              </div>
              <div className="cost__points--item">
                <RadioBtn btnSize="small" title="Добавить рамку"/>
              </div>
            </form>
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
            <div className="cost__submit">
              <Button title="Оформить заказ" btnSize="medium"/>
            </div>

            {/* <div>
              <div className="btn btn--small">
                <input id="radio-1" type="radio" name="radio" value="1"/>
                <label htmlFor="radio-1">Radio button 1</label>
              </div>
              
              <div className="btn btn--small">
                <input id="radio-2" type="radio" name="radio" value="2"/>
                <label htmlFor="radio-2">Radio button 2</label>
              </div>
              
              <div className="btn btn--small">
                <input id="radio-3" type="radio" name="radio" value="3"/>
                <label htmlFor="radio-3">Radio button 3</label>
              </div>
              
              <div className="btn btn--small">
                <input id="radio-4" type="radio" name="radio" value="4"/>
                <label htmlFor="radio-4">Disabled</label>
              </div>
              <RadioBtn btnSize="small" title="Проверка"/>
            </div> */}

          </div>
        </div>
        <SectionCostDescription/>
      </div>
    </section>
  )
}

export default SectionCost
