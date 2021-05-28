import Title from '../../../title/Title';
import OfferItem from './OfferItem';

function SectionOffer() {
  return (
    <section class="section section__offer wrap">
      <div class="offer__inner">
      <Title titleSize="title-2" title="Что мы предлагаем?"/>
      <OfferItem leftRight="left"/>

      <OfferItem leftRight="right"/>

        {/* <div class="offer__item offer__item-left">
          <div class="offer__item-left--img"></div>
          <div class="offer__item--text-block">
            <div class="offer__item--text">
              <h3 class="title-3 offer__subtitle">Коллаж на холсте</h3>
              <p class="offer__text">
                Хотите написать интересную историю из&nbsp;любимых фотографий?
                Мы&nbsp;предлагаем создать оригинальный фотоколлаж, который без
                слов расскажет о&nbsp;самых ярких моментах вашей жизни!
              </p>
              <p class="offer__text">
                Необычный красочный коллаж из&nbsp;фото&nbsp;&mdash; это всегда
                уместный подарок, который понравится всем без исключения.
                Универсальное решение для поздравления с&nbsp;юбилеем, днем
                рождения, знаменательной датой и&nbsp;просто&nbsp;&mdash; для
                поднятия настроения.
              </p>
            </div>
            <a href="#">
              <button class="btn btn--medium">Узнать больше</button>
            </a>
          </div>
        </div> */}
        <div class="offer__item offer__item-right">
          <div class="offer__item--text-block">
            <div class="offer__item--text">
              <h3 class="title-3 offer__subtitle">Портреты в художественных стилях</h3>
              <p class="offer__text">
                Портреты могут выполняться в&nbsp;различных стилях: классических,
                фэнтезийных. Цветовую гамму и&nbsp;стиль оформления подбирает сам
                заказчик.
              </p>
              <p class="offer__text">
                Если вы&nbsp;знаете, в&nbsp;каком стиле выполнен интерьер
                в&nbsp;доме (или офисе) того, кому вы&nbsp;собираетесь подарить
                фотопортрет, можно создать идеально подходящую в&nbsp;него картину,
                ограничения только в&nbsp;вашей фантазии, а&nbsp;наши опытные
                мастера и&nbsp;высокотехнологичное современное оборудование могут
                воплотить в&nbsp;жизнь любую задумку!
              </p>
            </div>
            <a href="#">
              <button class="btn btn--medium">Узнать больше</button>
            </a>
          </div>
          <div class="offer__item-right--img"></div>
        </div>
      </div>
    </section>
  )
}

export default SectionOffer;