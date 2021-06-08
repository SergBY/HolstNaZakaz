import React from 'react';
import './SectionStages.css';
import Title from '../../../title/Title';
import StagesPoint from './StagesPoint';

function SectionStages() {
  return (
    <section className="section section__stages wrap">
      <div className="stages__inner">
      <Title titleSize="title-2" title="Этапы изготовления"/>
        <div className="stages__item">
          <div className="stages__column">
            <StagesPoint number={1}
                         subtitle="Заявка и расчет"
                         text="Пришлите нам фото для обработки, и&nbsp;наши  специалисты свяжутся с&nbsp;Вами."/>
            <StagesPoint number={2}
                         subtitle="Согласование макета"
                         text="Наш дизайнер подготовит макет и&nbsp; отправить вам на согласование."/>
            <StagesPoint number={3}
                         subtitle="Изготовление"
                         text="После согласования макета ваш заказ  поступает в&nbsp;производство."/>
            <StagesPoint number={4}
                         subtitle="Доставка"
                         text="Бесплатная доставка по&nbsp;Москве. А&nbsp; также возможна доставка в&nbsp;любую точку России. "/>
          </div>
          <div className="stages__item--img"></div>
        </div>
      </div>
    </section>
  )
}

export default SectionStages;