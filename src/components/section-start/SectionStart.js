import './section-start.css';
import StartButton from './start-button/StartButton';
import StartTitle from './start-title/StartTitle';

function SectionStart() {
  return (
    <section className="section section__start wrap">
      <div className="start__inner">
        <div className="start__item">
          <div className="start__text-block">
            <StartTitle title="Печать на холсте по фото со скидкой -25%"/>
            <StartTitle description="Изготовление заказа от 30 минут и бесплатная доставка по Москве"/>
          </div>
          <StartButton title="Рассчитать стоимость"/>
        </div>
      </div>
    </section>
  )
}

export default SectionStart;