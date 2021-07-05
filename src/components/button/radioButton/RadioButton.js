import React from 'react';
import '../button.css';
import './RadioButton.css';
import PropTypes from 'prop-types';

const propTypes = {
  btnSize: PropTypes.oneOf(['small', 'foto-size', 'round']).isRequired
};

function RadioBtn(props) {
  let btnClass = '';

  if (props.btnSize === 'small') {
    btnClass = 'btn btn--small';
  }
  if (props.btnSize === 'foto-size') {
    btnClass = 'btn btn--foto-size';
  }
  if (props.btnSize === 'round') {
    btnClass = 'radio-round';
  }
 

  return (
      <div className={btnClass} onClick={props.onClick}>
        <input id={props.title} type="radio" name="radio" value={props.title}></input>
        <label htmlFor={props.title}>{props.title}</label>
      </div>
  )
}

RadioBtn.propTypes = propTypes;

export default RadioBtn;
