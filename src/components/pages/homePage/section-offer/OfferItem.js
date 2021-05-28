import Title from '../../../title/Title';

function OfferItem(props) {
  let leftRightClass = '';
  let leftRightImgClass = '';

  if (props.leftRight === 'left') {
    leftRightClass = 'offer__item offer__item-left';
    leftRightImgClass = 'offer__item-left--img';
  }

  if (props.leftRight === 'right') {
    leftRightClass = 'offer__item offer__item-right';
    leftRightImgClass = 'offer__item-right--img';
  }

  return (
    <div className={leftRightClass}>
      <div className={leftRightImgClass}></div>
      <div className="offer__item--text-block">
        <div className="offer__item--text">
        {/* <Title titleSize="title-3" title="Коллаж на холсте"/> */}
        <Title titleSize="title-3" title="Коллаж на холсте"/>
          {/* <h3 className={titleClass}>Коллаж на холсте offer__subtitle</h3> */}
          <p className="offer__text">
            Хотите написать интересную историю из&nbsp;любимых фотографий?
            Мы&nbsp;предлагаем создать оригинальный фотоколлаж, который без
            слов расскажет о&nbsp;самых ярких моментах вашей жизни!
          </p>
          <p className="offer__text">
            Необычный красочный коллаж из&nbsp;фото&nbsp;&mdash; это всегда
            уместный подарок, который понравится всем без исключения.
            Универсальное решение для поздравления с&nbsp;юбилеем, днем
            рождения, знаменательной датой и&nbsp;просто&nbsp;&mdash; для
            поднятия настроения.
          </p>
        </div>
        <a href="#">
          <button className="btn btn--medium">Узнать больше</button>
        </a>
      </div>
    </div>
  )
}

export default OfferItem;
