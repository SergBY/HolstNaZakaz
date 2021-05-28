import './button.css';
import PropTypes from 'prop-types';

const propTypes = {
  btnSize: PropTypes.oneOf(['big', 'medium', 'small']).isRequired
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
  return (
    <a href="#">
      <button className={btnClass}>{props.title}</button>
    </a>
  )
}

Button.propTypes = propTypes;

export default Button;