import './phone.css';

function Phone(props) {
  return (
  <div className="phone">
    <a className="header__phone" href={`tel:${props.mainPhone}`}>
      <p className="header__phone-text">{props.mainPhone}</p>
    </a>
  </div>
  )
}

export default Phone;