import React from 'react';
import './section-start.css';
import Button from '../button/Button';
import Title from '../title/Title';

function SectionStart(props) {
  return (
    <section className="section section__start wrap">
      <div className="start__inner">
        <div className="start__item">
          <div className="start__text-block">
            <Title titleSize="title-1" title={props.title}/>
            <Title titleSize="start__text" title="Изготовление заказа от 30 минут и бесплатная доставка по Москве"/>
          </div>
          <Button btnSize="big" title="Рассчитать стоимость" link="/cost"/>
        </div>
      </div>
    </section>
  )
}

export default SectionStart;