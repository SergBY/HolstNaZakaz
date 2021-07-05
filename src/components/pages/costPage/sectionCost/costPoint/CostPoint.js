import React from 'react';
import PropTypes from 'prop-types';
import './CostPoint.css';

const propTypes = {
  number: PropTypes.number.isRequired,
};

function CostPoint(props) {
  return (
    <div className="cost__points--numPoint">
      <div className="cost__points--number">{props.number}</div>
    </div>
  )
}

CostPoint.propTypes = propTypes;
export default CostPoint;