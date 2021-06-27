import React from 'react';
import Button from '../../../../button/Button';
import { Reviews } from '../../../../../constants';
import ReviewCard from '../ReviewCard';
import './AllReviews.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const AllReviews = (props) => {
  const { onClose }=props;

  return (
    <form className="all-reviews">
        <div className="all-reviews__cards">
          <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}> 
          {Reviews.map(link => (
              <ReviewCard avatar={link.avatar} name={link.name} text={link.text} key={link.id}/>
            ))}
          </Carousel>
        </div>
        <div className="all-reviews__btn">
          <Button onClick={ onClose } btnSize="form" title="Закрыть"/>
        </div>
    </form>
  )
}
