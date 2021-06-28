import React from 'react';
import './Point.css';

function Point (props) {
  return (
    <div className="point">
      <div className="point__dot"></div>
      <p>{props.text}</p>
    </div>
  )
}

export default Point;