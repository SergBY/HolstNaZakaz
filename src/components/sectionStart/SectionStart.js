import React from 'react';
import './section-start.css';
import Title from '../title/Title';
// import LinkBtn from '../link/Link';
import { Link } from 'react-router-dom';


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
            {/* <LinkBtn linkSize="big" title="Рассчитать стоимость" href="/cost"/> */}
            <div className="btn btn--big">
              <Link to="/cost">Рассчитать стоимость</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionStart;