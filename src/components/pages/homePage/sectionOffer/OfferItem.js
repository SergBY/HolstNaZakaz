import Title from '../../../title/Title';
import Button from '../../../button/Button';
import PropTypes from 'prop-types';

const propTypes = {
  align: PropTypes.oneOf(['left', 'right']).isRequired,
  subtitle: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
};

function OfferItem(props) {
  let alignClass = '';
  let alignImgClass = '';

  if (props.align === 'left') {
    alignClass = 'offer__item offer__item-left';
    alignImgClass = 'offer__item-left--img';
  }

  if (props.align === 'right') {
    alignClass = 'offer__item offer__item-right';
    alignImgClass = 'offer__item-right--img';
  }

  return (
    <div className={alignClass}>
      <div className={alignImgClass}></div>
      <div className="offer__item--text-block">
        <div className="offer__item--text">
        <Title titleSize="title-3" title={props.subtitle}/>
        <>
          <p className="offer__text">{props.text1}</p>
          <p className="offer__text">{props.text2}</p>
        </> 
        </div>
        <Button btnSize="medium" title="Узнать больше"/>
      </div>
    </div>
  )
}

OfferItem.propTypes = propTypes;

export default OfferItem;
