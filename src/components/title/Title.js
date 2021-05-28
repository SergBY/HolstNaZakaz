import './title.css';
import PropTypes from 'prop-types';

const propTypes = {
  titleSize: PropTypes.oneOf(['title-1', 'start__text', 'title-2', 'title-3']).isRequired
};

function StartTitle(props) {
  let titleClass = '';

  if (props.titleSize === 'title-1') {
    titleClass = 'title-1 start__title';
  }
  if (props.titleSize === 'start__text') {
    titleClass = 'start__text';
  }

  if (props.titleSize === 'title-2') {
    titleClass = 'title-2';
  }

  if (props.titleSize === 'title-3') {
    titleClass = 'title-3';
  }

  return (
    <div>
      <h2 className={titleClass}>{props.title}</h2>
    </div>
  )
}

StartTitle.propTypes = propTypes;

export default StartTitle;