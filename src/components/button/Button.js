import './button.css';

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
  return (
    <a href="#">
      <button className={btnClass}>{props.title}</button>
    </a>
  )
}

export default Button;