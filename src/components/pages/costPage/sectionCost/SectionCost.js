import React from 'react';
import Title from '../../../title/Title';
import Button from '../../../button/Button';
import CostPoint from '../CostPoint';
import "./SectionCost.css";


function SectionCost() {
  return (
    <>
    <section className="section section__cost wrap">
      <div className="cost__inner">
        <Title titleSize="title-2" title="Расчет стоимости и оформление заказа"/>
          <div className="cost__item">
            <div className="cost__points">
              <div className="cost__points--point">
                <CostPoint number="1" title="Выберите фото"/>
                <Button btnSize="foto" title="Выбрать фото"/>
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
