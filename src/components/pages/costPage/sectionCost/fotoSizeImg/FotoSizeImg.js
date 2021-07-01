import React from 'react';
import PropTypes from 'prop-types';
import './FotoSizeImg.css';

const propTypes = {
  fotoSize: PropTypes.oneOf(['30x40', '40x60', '50x70', '60x90', '80x120']).isRequired
};

function FotoSizeImg(props) {
  let fotoSizeClass = '';

  if (props.fotoSize === '30x40') {
    fotoSizeClass = 'foto-size--30x40';
  }
  if (props.fotoSize === '40x60') {
    fotoSizeClass = 'foto-size--40x60';
  }
  if (props.fotoSize === '50x70') {
    fotoSizeClass = 'foto-size--50x70';
  }
  if (props.fotoSize === '60x90') {
    fotoSizeClass = 'foto-size--60x90';
  }
  if (props.fotoSize === '80x120') {
    fotoSizeClass = 'foto-size--80x120';
  }

  return (
      <div className="foto-size__item">
        <div className={fotoSizeClass}></div>
      </div>
  )
}

FotoSizeImg.propTypes = propTypes;

export default FotoSizeImg;