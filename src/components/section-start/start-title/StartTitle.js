import './start-title.css';

function StartTitle(props) {
  return (
    <div>
      <h1 className="title-1 start__title">{props.title}</h1>
      <p className="start__text">{props.description}</p>
    </div>
  )
}

export default StartTitle;