import './SectionReviews.css';
import Title from '../../../title/Title';
import Button from '../../../button/Button';
import ReviewCard from './ReviewCard';
import { Reviews } from '../../../constants';

function SectionReviews() {
  return(
    <section class="section section__reviews wrap">
      <div class="reviews__inner">
        <Title titleSize="title-2" title="Отзывы наших клиентов"/>
        <div class="reviews__item">
          <div class="reviews__cards">
            <ReviewCard card={Reviews}/>
          </div>
          <Button btnSize="medium" title="Узнать больше"/>
        </div>
      </div>
    </section>
  )
}

export default SectionReviews;