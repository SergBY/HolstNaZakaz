import React from 'react';
import './SectionPortraitOil.css';
import Title from '../../../title/Title';
import Point from '../../../point/Point';

function SectionPortraitOil() {
  return(
    <section className="section section__portrait-oil wrap">
      <div className="portrait-oil__inner">
        <Title titleSize="title-2" title="Портрет маслом на холсте"/>
        <div className="portrait-oil__item">
          <div className="portrait-oil__img-1"></div>
          <p>Портрет маслом – классика художественного искусства, уместная в современном доме. Выглядят такие произведения дорого и эффектно, и, если вы ищите идеи для солидного подарка – это отличный вариант.</p>

          <Title titleSize="title-3" title="Пишем фотопортреты маслом любой сложности."/>
          <p>Портрет маслом по фотографии позволяет реализовать любые задумки и создать самые необычные образы и эффекты. При этом наши художники всегда стараются сохранить портретное сходство и подчеркнуть достоинства внешности. В результате вы получаете красивую картину маслом, выполненную по вашим фото, в соответствии с выбранной стилистикой.</p>
          
          <Title titleSize="title-3" title="Семейный портрет маслом."/>
          <p>Вы можете заказать семейный портрет маслом из разных фотографий, если хорошего совместного снимка нет в вашем фотоархиве. Вам останется только выбрать стилистику картины, а талантливый художник воплотит вашу задумку на холсте, объединив несколько фото в один семейный портрет.</p>
          
          <Title titleSize="title-3" title="Фотопортрет из старинных черно-белых фотографий."/>
          <p>Если в вашем семейном фотоархиве есть старые фотографии плохого качества, это повод увековечить память о близких и родных в красивом портрете маслом. Тем более, что мы работаем со снимками любого качества.</p>

          <div className="portrait-oil__img-2"></div>
          <Title titleSize="title-3" title="Портрет маслом по фото в исторических костюмах"/>
          <p>Любая картина маслом на холсте – это возможность воплотить фантазии. Хотите увидеть семью в костюмах русского дворянства, шефа в образе французского графа, или подругу в шикарном платье а-ля Мария Антуанетта? Нет проблем! На портрете по вашим фотографиям художник изобразит любую атмосферу, образы и костюмы.</p>

          <Title titleSize="title-3" title="Как заказать портрет маслом по фото, не отходя от компьютера?"/>
          <div className="points points--right">
            <Point text="Оформляете заказ на сайте, загружаете свои фотографии и выбираете образ для картины."/>

            <Point text="Менеджер связывается с вами, уточняет все нюансы заказа и ваши личные пожелания."/>
            
            <Point text="Дизайнеры приступают к работе – создают черновой макет, чтобы вы имели четкое представление о том, какой будет готовая работа."/>
            
            <Point text="После согласования макета и внесения необходимых корректив, художники пишут картину маслом оперативно и без вашего присутствия в студии."/>
            
            <Point text="Готовое произведение упаковывается в красивую подарочную упаковку и доставляется заказчику."/>
          </div>

          <div className="portrait-oil__img-3"></div>
          <Title titleSize="title-3" title="Почему 83% наших клиентов обращаются к нам повторно?"/>
          <div className="points">
            <Point text="Всегда отличный результат, который гарантируется многолетним опытом;"/>

            <Point text="Над каждым портретом работает профессиональный художник;"/>
            
            <Point text="Реализуем идеи любого уровня сложности;"/>
            
            <Point text="Срок исполнения заказа – 2-3 дня;"/>
            
            <Point text="Доставим по Москве БЕСПЛАТНО;"/>
            
            <Point text="Упаковываем готовую работу в красивую подарочную упаковку;"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionPortraitOil;