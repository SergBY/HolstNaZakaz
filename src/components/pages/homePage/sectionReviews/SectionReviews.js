import './SectionReviews.css';
import Title from '../../../title/Title';
import Button from '../../../button/Button';
import ReviewCard from './ReviewCard';
import { Reviews } from '../../../constants';

function SectionReviews() {
  return(
    <section className="section section__reviews wrap">
      <div className="reviews__inner">
        <Title titleSize="title-2" title="Отзывы наших клиентов"/>
        <div className="reviews__item">
          <div className="reviews__cards">
            <ReviewCard card={Reviews}/>
          </div>
          <Button btnSize="medium" title="Читать все отзывы"/>
        </div>
      </div>
    </section>
  )
}

export default SectionReviews;