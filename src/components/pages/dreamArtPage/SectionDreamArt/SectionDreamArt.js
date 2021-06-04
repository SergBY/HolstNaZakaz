import './SectionDreamArt.css';
import Title from '../../../title/Title';
import Point from '../../../point/Point';

function SectionDreamArt() {
  return(
    <section className="section section__dream-art wrap">
      <div className="dream-art__inner">
        <Title titleSize="title-2" title="Портреты Дрим Арт на холсте"/>
        <div className="dream-art__item">
          <div className="dream-art__img-1"></div>
          <p>Хотите порадовать и удивить близкого человека оригинальным подарком? В таком случае заказать портрет в стиле дрим-арт – одно из лучших решений. В Москве это можно сделать, обратившись к услугам компании «Холст На Заказ». Располагая штатом опытных талантливых художников и современной высококачественной техникой для печати, своим клиентам мы можем предложить:</p>
          <div className="points">
            <Point text="Фотопортреты в стиле дрим-арт высокого качества исполнения;"/>

            <Point text="Приемлемые цены, регулярные скидки и приятные акционные предложения;"/>
            
            <Point text="Компетентный дружелюбный сервис: наши опытные консультанты с радостью ответят на любые интересующие вопросы;"/>
            
            <Point text="Бесплатную курьерскую доставку по Москве и максимально быструю почтовую доставку в другие города;"/>
            
            <Point text="Оплату заказа при получении."/>
          </div>
          
          <Title titleSize="title-3" title="Что такое дрим-арт: особенности художественного стиля"/>
          <p>Дрим-арт – это один из самых ярких и живописных методов художественной обработки портретов на заказ. На первый взгляд особенно непрофессионалу отличить такую фотопечать от картины, нарисованной от руки, очень сложно. Особенность стиля заключается в том, что основной объект изображается максимально реалистично, а фон делается очень ярким и фантазийным. В результате портрет выглядит очень свежим, живым, легким и жизнерадостным. В работе с таким стилем можно позволить себе воплотить в изображении на холсте любые творческие идеи и пожелания. Это идеальная основа для самых смелых художественных экспериментов.</p>
          <p>Больше всего он подходит для изображения детей и юных девушек, но, естественно, это не строгое ограничение – нарисовать портрет в стиле дрим-арт можно чей угодно. Такая картина непременно станет центральным объектом интерьера, привлекающим к себе внимание, невероятно преображающим, украшающим его.</p>
          <div className="dream-art__img-2"></div>

          <Title titleSize="title-3" title="Как заказать фотопортрет в стиле дрим-арт?"/>
          <p>Для того чтобы стать обладателем такой картины, сделанной нашими художниками, нужно всего лишь через форму на главной странице сайта отправить нам фото, на основе которого вы хотели бы иметь портрет. В течение короткого времени с вами свяжется наш менеджер для уточнения всех деталей заказа, который дальше поступает в работу.</p>
          <p>Наши художники в соответствии с пожеланиями заказчика разрабатывают эскиз, отправляют его на согласование заказчику. Если вас все устраивает – эскиз идет в печать на холсте, если есть какие-то замечания или пожелания – редактируется в соответствии с ними. Готовая работа может быть доставлена либо курьером (актуально для Москвы), либо почтой. Обращайтесь! Будем рады сотрудничеству!</p>
        </div>
      </div>
    </section>
  )
}

export default SectionDreamArt;