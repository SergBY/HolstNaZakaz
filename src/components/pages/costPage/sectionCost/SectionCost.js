import React, { useState } from 'react';
import { HolstSize } from '../../../../constants';
import { HolstSizes } from '../../../../constants';
import Title from '../../../title/Title';
import Button from '../../../button/Button';
import CostPoint from './costPoint/CostPoint';
import FotoSizeImg from './fotoSizeImg/FotoSizeImg';
import RadioBtn from '../../../button/radioButton/RadioButton';
import "./SectionCost.css";


function SectionCost() {

  const [selected, setSelected] = useState('');

  return (
    <>
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
                  <Button btnSize="foto" title="Выбрать фото"/>
                  <input className="btn btn--small btn--small-foto" id='1' type="file" name="file"></input>
                </div>
              </div>
              <form className="cost__points--point">
                <div className="cost__points--title">
                  <CostPoint number={2}/>
                  <Title titleSize="title-3" title="Выберите размер (см)"/>
                </div>
                <div className="cost__points--item">
                  {/* <Button btnSize="foto-size" title="30x40" onClick={() => setSelected(size30x40)}/>
                  <Button btnSize="foto-size" title="40х60" onClick={() => setSelected(size40x60)}/>
                  <Button btnSize="foto-size" title="50х70" onClick={() => setSelected(size50x70)}/>
                  <Button btnSize="foto-size" title="60х90" onClick={() => setSelected(size60x90)}/>
                  <Button btnSize="foto-size" title="80х120" onClick={() => setSelected(size80x120)}/> */}

                  {HolstSizes.map(link => (
                    <RadioBtn btnSize="foto-size" title={link.size} key={link.id} onClick={() => setSelected(link.size)}/>
                  ))}
                </div>
                <FotoSizeImg fotoSize={selected}/>
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

              <Title titleSize="title-3" title="Завершите оформление заказа"/>
              <form>
                <RadioBtn btnSize="round" title="Доставка"/>
                    <div>
                      <input className="aaa" name="phone" type="tel" placeholder="Телефон*" required/>
                      <input className="aaa" name="name" type="text" placeholder="Имя"/>
                    </div>
                <RadioBtn btnSize="round" title="Самовывоз"/>

              </form>



              <div>
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

              </div>


            </div>
            <div className="cost__description-baguettes">
              <div className="cost__description">
                
              </div>
              <div className="cost__baguettes">

              </div>
            </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default SectionCost
