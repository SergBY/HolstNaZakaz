import React from 'react';
import './phone.css';
import PropTypes from 'prop-types';

const propTypes = {
  mainPhone: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

function Phone(props) {
  return (
  <div className="phone">
    <a className="header__phone" href={`tel:${props.mainPhone}`}>
      <p className="header__phone-text">{props.mainPhone}</p>
    </a>
  </div>
  )
}

Phone.propTypes = propTypes;

export default Phone;