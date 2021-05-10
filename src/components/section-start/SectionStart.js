import './section-start.css';
import StartButton from './start-button/StartButton';
import StartTitle from './start-title/StartTitle';

function SectionStart() {
  return (
    <section class="section section__start wrap">
      <div class="start__inner">
        <div class="start__item">
          <div class="start__text-block">
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