import './button.css';
import PropTypes from 'prop-types';

const propTypes = {
  btnSize: PropTypes.oneOf(['big', 'medium', 'small', 'map']).isRequired
};

function Button(props) {
  let btnClass = '';

  if (props.btnSize === 'big') {
    btnClass = 'btn btn--big';
  }
  if (props.btnSize === 'medium') {
    btnClass = 'btn btn--medium';
  }
  if (props.btnSize === 'small') {
    btnClass = 'btn btn--small';
  }
  if (props.btnSize === 'map') {
    btnClass = 'btn btn__map';
  }
  return (
      <button className={btnClass}>{props.title}</button>
  )
}

Button.propTypes = propTypes;

export default Button;