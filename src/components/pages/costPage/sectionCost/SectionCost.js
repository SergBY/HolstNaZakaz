import React from 'react';
import Title from '../../../title/Title';
import Button from '../../../button/Button';
import CostPoint from './CostPoint';
import FotoSizeImg from './fotoSizeImg/FotoSizeImg';
import "./SectionCost.css";


function SectionCost(size) {
  let a = '30x40';
  function size(a) {
    if (a === '30x40') {
      console.log(a);
      return (a);
    }
    if (a === '40x60') {
      console.log(a);
      return (a);
    }

  }
  return (
    <>
    <section className="section section__cost wrap">
      <div className="cost__inner">
        <Title titleSize="title-2" title="Расчет стоимости и оформление заказа"/>
          <div className="cost__item">
            <div className="cost__points">
              <div className="cost__points--point">
                <CostPoint number={1} title="Выберите фото"/>
                <Button btnSize="foto" title="Выбрать фото"/>
              </div>
              <div className="cost__points--point">
                <CostPoint number={2} title="Выберите размер (см)"/>
                <div className="cost__points--btns-size">
                  <Button btnSize="foto-size" title="30x40" onClick={size('30x40')}/>
                  <Button btnSize="foto-size" title="40х60" onClick={size('40x60')}/>
                  <Button btnSize="foto-size" title="50х70"/>
                  <Button btnSize="foto-size" title="60х90"/>
                  <Button btnSize="foto-size" title="80х120"/>
                </div>
                <FotoSizeImg fotoSize={size(a)}/>

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
