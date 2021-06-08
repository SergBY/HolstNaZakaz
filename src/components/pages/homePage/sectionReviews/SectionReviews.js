import React from 'react';
import './SectionReviews.css';
import Title from '../../../title/Title';
import Button from '../../../button/Button';
import ReviewCard from './ReviewCard';
import { Reviews } from '../../../../constants';

function SectionReviews() {
  return(
    <section className="section section__reviews wrap">
      <div className="reviews__inner">
        <Title titleSize="title-2" title="Отзывы наших клиентов"/>
        <div className="reviews__item">
          <div className="reviews__cards">
            {Reviews.map(link => (
              <ReviewCard avatar={link.avatar} name={link.name} text={link.text} key={link.id}/>
            ))}
          </div>
          <Button btnSize="medium" title="Читать все отзывы"/>
        </div>
      </div>
    </section>
  )
}

export default SectionReviews;