import React from 'react';
import './Link.css';
import PropTypes from 'prop-types';

const propTypes = {
  buttonSize: PropTypes.oneOf(['big', 'medium', 'small', 'map', 'form']).isRequired
};

function LinkBtn(props) {
  let buttonClass = '';

  if (props.buttonSize === 'big') {
    buttonClass = 'button button--big';
  }
  if (props.buttonSize === 'medium') {
    buttonClass = 'button button--medium';
  }
  if (props.buttonSize === 'small') {
    buttonClass = 'button button--small';
  }
  if (props.buttonSize === 'map') {
    buttonClass = 'button button__map';
  }
  if (props.buttonSize === 'form') {
    buttonClass = 'button button--form';
  }
  return (
    <div className={buttonClass}>
      <a href={props.href} onClick={props.click}>{props.title}</a>
    </div>
  )
}

LinkBtn.propTypes = propTypes;

export default LinkBtn;
