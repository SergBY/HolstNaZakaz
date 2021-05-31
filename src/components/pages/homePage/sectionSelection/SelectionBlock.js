import PropTypes from 'prop-types';

const propTypes = {
  pict: PropTypes.string.isRequired
};

function SelectionBlock(props) {
let pictSelection = '';

if (props.pict === 'delivery') {
  pictSelection = 'selection__block--pict-delivery';
}
if (props.pict === 'printer') {
  pictSelection = 'selection__block--pict-printer';
}
if (props.pict === 'wallet') {
  pictSelection = 'selection__block--pict-wallet';
}
if (props.pict === 'gift') {
  pictSelection = 'selection__block--pict-gift';
}

  return(
    <div className="selection__block">
      <div className="selection__block--pict">
        <div className={pictSelection}></div>
      </div>
      <div className="selection__block--text">{props.text}</div>
    </div>
  )
}

SelectionBlock.propTypes = propTypes;

export default SelectionBlock;