import './logo.css';

function Logo(props) {
  return (
  <div className="logo">
    <a href="#" className="header__logo">{props.logo}</a>
  </div>
  )
}

export default Logo;