import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const propTypes = {
  btnSize: PropTypes.oneOf(['big', 'medium', 'small', 'map', 'form']).isRequired
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
  if (props.btnSize === 'enable') {
    btnClass = 'btn btn--small btn--small-enable';
  }
  if (props.btnSize === 'foto') {
    btnClass = 'btn btn--small btn--small-foto';
  }
  if (props.btnSize === 'map') {
    btnClass = 'btn btn__map';
  }
  if (props.btnSize === 'form') {
    btnClass = 'btn btn--form';
  }
  return (
      <button className={btnClass} onClick={props.onClick}>{props.title}</button>
  )
}

Button.propTypes = propTypes;

export default Button;
