import React, { useState } from 'react';
import Title from '../../../title/Title';
import Button from '../../../button/Button';

import SectionCostPoints from './sectionCostPoints/SectionCostPoints';
import SectionCostSpecification from './sectionCostSpecification/SectionCostSpecification';
import Baguettes from './baguettes/Baguettes';
import SectionCostDelivery from './sectionCostDelivery/SectionCostDelivery';
import SectionCostDescription from './sectionCostDescription/SectionCostDescription';
import "./SectionCost.css";


function SectionCost() {

  return (
    <section className="section section__cost wrap">
      <div className="cost__inner">
        <Title titleSize="title-2" title="Расчет стоимости и оформление заказа"/>
        <div className="cost__item">
          <div className="cost__main">
            <SectionCostPoints/>
            <div className="cost__main--right">
              <SectionCostSpecification/>
              <Baguettes/>
            </div>
          </div>
          <SectionCostDelivery/>
          
          <div className="cost__submit">
            <Button title="Оформить заказ" btnSize="medium"/>
          </div>

        </div>
        <SectionCostDescription/>
      </div>
    </section>
  )
}

export default SectionCost
