import React from 'react';
import './section-start.css';
import Title from '../title/Title';
import Link from '../link/Link';

function SectionStart(props) {
  return (
    <section className="section section__start wrap">
      <div className="start__inner">
        <div className="start__item">
          <div className="start__text-block">
            <Title titleSize="title-1" title={props.title}/>
            <Title titleSize="start__text" title="Изготовление заказа от 30 минут и бесплатная доставка по Москве"/>
          </div>
          <div>
            <Link linkSize="big" title="Рассчитать стоимость" href="/cost"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionStart;