import React from 'react';
import './button.css';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  if (props.btnSize === 'map') {
    btnClass = 'btn btn__map';
  }
  if (props.btnSize === 'form') {
    btnClass = 'btn btn--form';
  }
  return (
    <Link to={props.link}>
      <button className={btnClass}>{props.title}</button>
    </Link>
  )
}

Button.propTypes = propTypes;

export default Button;
