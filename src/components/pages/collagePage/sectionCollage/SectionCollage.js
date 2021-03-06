import React from 'react';
import './SectionCollage.css';
import Title from '../../../title/Title';
import Point from '../../../point/Point';

function SectionCollage() {
  return(
    <section className="section section__collage wrap">
    <div className="collage__inner">
      <Title titleSize="title-2" title="Коллаж на холсте"/>
      <div className="collage__item">
        <div className="collage__img-1"></div>
        <p>Хотите написать интересную историю из любимых фотографий? Мы предлагаем создать оригинальный фотоколлаж, который без слов расскажет о самых ярких моментах вашей жизни!</p>
        <p>Необычный красочный коллаж из фото – это всегда уместный подарок, который понравится всем без исключения. Универсальное решение для поздравления с юбилеем, днем рождения, знаменательной датой и просто – для поднятия настроения. Можно добавить поздравительную надпись или пару шуток, чтобы презент получился индивидуальным и неповторимым.</p>
        <p>Стильный фотоколлаж из фотографий – удачный способ преображения скучного пространства и декорирования пустующей стены. Если интерьеру не хватает красок и динамики, тогда это отличное решение. Профессионально оформленная композиция из фотоснимков украсит собой любое помещение, как жилое, так и офисное.</p>
        <Title titleSize="title-3" title="Как мы создаем фото-истории?"/>
        <p>Мы выполняем индивидуальные и корпоративные заказы, создаем коллажи любого стиля, размера и формата. Тематика может быть любой: семейные легенды, Love-стори, свадьба, путешествие, детские фото. Вы можете самостоятельно выбрать фото для композиции и прислать нам снимки:</p>
        <div className="points">
          <Point text="Со смартфонов;"/>
          <Point text="Фотоаппаратов (необязательно профессионального качества);"/>
          <Point text="Из социальных сетей (Инстаграм в том числе);"/>
          <Point text="Из семейного архива."/>
        </div>
        <p>Коллаж можно распечатать на фотобумаге или холсте, а для лучшей сохранности покрыть его специальным гелем или лаком. Такая защита гарантирует яркость и четкость изображения до 50 лет.</p>
        <p>В нашем арсенале уже имеется серьезный выбор готовых макетов, но если вам хочется чего-то совершенно необычного, тогда мы создадим шаблон специально для вас. Креативные дизайнеры студии никогда не разочаровывают клиентов и всегда оправдают ваши ожидания.</p>
        <div className="collage__img-2"></div>
        <Title titleSize="title-3" title="Несколько профессиональных советов от дизайнера"/>
        <div className="points">
          <Point text="Для оформления портрета лицо должно занимать большую часть фото;"/>
          <Point text="Если вы не можете выбрать снимок, присылайте все – профессионалы определят лучший быстрее;"/>
          <Point text="Разрешение не менее 1000 пикселей и размер от 2 Мб;"/>
          <Point text="Резкость и четкость – главные показатели качественного снимка. Чем они выше, тем лучше будет результат."/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionCollage;