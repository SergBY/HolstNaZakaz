import React from 'react';
import Title from '../../../title/Title';
import PropTypes from 'prop-types';

const propTypes = {
  number: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

function StagesPoint(props) {
  return (
    <div className="stages__column--point">
      <div className="stages__column--number">{props.number}</div>
      <div className="stages__column--article">
        <Title titleSize="title-3" title={props.subtitle}/>
        <div className="stages__column--text">{props.text}</div>
      </div>
    </div>
  )
}

StagesPoint.propTypes = propTypes;
export default StagesPoint;