import './logo.css';
import PropTypes from 'prop-types';

const propTypes = {
  logo: PropTypes.string.isRequired
};

function Logo(props) {
  return (
  <h1 className="logo">
    <a href="#" className="header__logo">{props.logo}</a>
  </h1>
  )
}

Logo.propTypes = propTypes;

export default Logo;