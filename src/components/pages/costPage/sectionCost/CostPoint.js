import React from 'react';
import Title from '../../../title/Title';
import PropTypes from 'prop-types';

const propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

function CostPoint(props) {
  return (
    <div className="cost__points--numPoint">
      <div className="cost__points--number">{props.number}</div>
      <div className="cost__points--title">
        <Title titleSize="title-3" title={props.title}/>
      </div>
    </div>
  )
}

CostPoint.propTypes = propTypes;
export default CostPoint;