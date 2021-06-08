import React from 'react';
import './SectionSelection.css';
import Title from '../../../title/Title';
import SelectionBlock from './SelectionBlock';

function SectionSelection () {
  return (
    <section className="section section__selection wrap">
      <div className="selection__inner">
        <div className="selection__title">
          <Title titleSize="title-2" title="Почему выбирают нас?"/>
        </div>
        <div className="selection__item">
          <SelectionBlock 
            text="Срочное изготовления и бесплатная доставка по Москве"
            pict="delivery"/>
          <SelectionBlock 
            text="Самое современное оборудование и технологии"
            pict="printer"/>
          <SelectionBlock 
            text="Мы работаем без предоплаты"
            pict="wallet"/>
          <SelectionBlock 
            text="Подарок на выбор каждому клиентуе"
            pict="gift"/>
        </div>
      </div>
    </section>
  )
}

export default SectionSelection;