import './start-title.css';

function StartTitle(props) {
  return (
    <div>
      <h1 class="title-1 start__title">{props.title}</h1>
      <p class="start__text">{props.description}</p>
    </div>
  )
}

export default StartTitle;