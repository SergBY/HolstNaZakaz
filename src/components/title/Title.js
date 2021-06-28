import React from 'react';
import './title.css';
import PropTypes from 'prop-types';

const propTypes = {
  titleSize: PropTypes.oneOf(['title-1', 'start__text', 'title-2', 'title-3', 'contacts']).isRequired
};

function Title(props) {
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

  if (props.titleSize === 'contacts') {
    titleClass = 'contacts__title';
  }

  return (
    <h2 className={titleClass}>{props.title}</h2>
  )
}

Title.propTypes = propTypes;

export default Title;