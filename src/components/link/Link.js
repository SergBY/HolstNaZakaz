import React from 'react';
import './Link.css';
import PropTypes from 'prop-types';

const propTypes = {
  linkSize: PropTypes.oneOf(['big', 'medium', 'small', 'map', 'form']).isRequired
};

function LinkBtn(props) {
  let linkClass = '';

  if (props.linkSize === 'big') {
    linkClass = 'link link--big';
  }
  if (props.linkSize === 'medium') {
    linkClass = 'link link--medium';
  }
  if (props.linkSize === 'small') {
    linkClass = 'link link--small';
  }
  if (props.linkSize === 'map') {
    linkClass = 'link link__map';
  }
  if (props.linkSize === 'form') {
    linkClass = 'link link--form';
  }
  return (
    <div className={linkClass}>
      <a href={props.href} onClick={props.click}>{props.title}</a>
    </div>
  )
}

LinkBtn.propTypes = propTypes;

export default LinkBtn;
