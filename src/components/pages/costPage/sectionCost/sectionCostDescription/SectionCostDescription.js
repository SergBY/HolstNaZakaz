import React from 'react';
import Title from '../../../../title/Title';
import StagesPoint from '../../../homePage/sectionStages/StagesPoint';
import Point from '../../../../point/Point';
import './SectionCostDescription.css';

export default function SectionCostDescription() {
  return (
    <div className="cost-description">
      <Title titleSize="title-2" title="Что входит в стоимость?"/>
      <div className="cost-description__inner">
        <div className="cost-description__column">
          <StagesPoint number={1}
                        subtitle="Крепёж"
                        text="На каждый портрет устанавливаеться крепеж (крокодил)."/>
          <StagesPoint number={2}
                        subtitle="Деревянный подрамник"
                        text="Мы используем только подрамники из высокосортной сосны."/>
          <StagesPoint number={3}
                        subtitle="Натуральный хлопковый холст"
                        text="Натуральный холст самый прочный из всех видов холстов. Сохраняет цвет на долгие годы."/>
        </div>
        <div className="cost-description__imgs">
          <div className="cost-description__img-baguette"></div>
          <div className="cost-description__img-foto"></div>
        </div>
        <div className="cost-description__column">
          <StagesPoint number={4}
                        subtitle="Галерейная натяжка"
                        text="В наших портретах мы используем галерейную натяжку. Также можем выполнить студийную натяжку и стандартную натяжку."/>
          <StagesPoint number={5}
                        subtitle="Ручная отрисовка изображения"
                        text="Наш художник вручную на графическом планшете отрисуют портрет и пришлем макет на согласование."/>
          <StagesPoint number={6}
                        subtitle="Упаковка"
                        text="Все заказы мы бережно упаковываем в защитную пленку и подарочную упаковку, а также у нас бесплатная доставка по Москве!"/>
        </div>
      </div>
      <div className="cost-description__dop">
        <Title titleSize="title-3" title="Дополнительно можно заказать:"/>
        <div className="cost-description__dop--points">
          <Point text="Багетная рама"/>
          <Point text="Покрытие акриловым лаком"/>
          <Point text="Покрытие текстурным гелем"/>
          <Point text="Подарочная упаковка"/>
        </div>
      </div>

    </div>
  )
}
