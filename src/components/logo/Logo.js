import './logo.css';

function Logo(props) {
  return (
  <h1 className="logo">
    <a href="#" className="header__logo">{props.logo}</a>
  </h1>
  )
}

export default Logo;