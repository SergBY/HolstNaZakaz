import './section-start.css';
import Button from '../button/Button';
import StartTitle from '../title/Title';

function SectionStart() {
  return (
    <section className="section section__start wrap">
      <div className="start__inner">
        <div className="start__item">
          <div className="start__text-block">
            <StartTitle titleSize="title-1" title="Печать на холсте по фото со скидкой -25%"/>
            <StartTitle titleSize="start__text" title="Изготовление заказа от 30 минут и бесплатная доставка по Москве"/>
          </div>
          <Button btnSize="big" title="Рассчитать стоимость"/>
        </div>
      </div>
    </section>
  )
}

export default SectionStart;