import './start-button.css';

function StartButton(props) {
  return (
    <a href="#">
      <button className="btn btn--start">{props.title}</button>
    </a>
  )
}

export default StartButton;