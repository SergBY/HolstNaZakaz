import React, {useState} from 'react';
import './SectionReviews.css';
import Title from '../../../title/Title';
import ReviewCard from './ReviewCard';
import { Reviews } from '../../../../constants';
import PopUp from '../../../popUp/PopUp';
import { AllReviews } from './allReviews/AllReviews';

function SectionReviews() {
  const [modalActive, setPopUpActive] = useState(false);
  
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
          <button className="btn btn--medium" onClick={() => setPopUpActive(true)}>Читать все отзывы</button>
          <PopUp active={modalActive} setActive={setPopUpActive}>
            <AllReviews onClose={(e) => {setPopUpActive(false); e.preventDefault()}} />
          </PopUp>
        </div>
      </div>
    </section>
  )
}

export default SectionReviews;