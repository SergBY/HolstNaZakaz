import React from 'react';
import './Navigation.css';
import Login from '../login/Login';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Registration from '../registartion/Registration';

const propTypes = {
  nav: PropTypes.array.isRequired
};

function Nav(props) {
  return(
      <nav className="menu">
            <ul className="menu__list">
              {props.nav.map(link => {
                if (link.dropdown) {
                  return (
                    <li className="menu__list-item menu__dropdown" key={link.id}>
                      <div className="menu__dropdown-arr">
                        <a className="menu__list-link">{link.name} &#8744; </a>
                        <div className="arr"></div>
                      </div>
                      <ul className="dropdown">
                        {link.dropdown.map(drop => 
                          <li key={drop.id}>
                            <Link to={drop.path}>{drop.name}</Link>
                          </li>
                        )}
                      </ul>
                    </li>
                  )
                }
                return (
                  <li className="menu__list-item" key={link.id}>
                      <Link to={link.path}>{link.name}</Link>
                  </li>
                )
              })}
            </ul>
            <div>
              <Login/>
              <Registration/>
            </div> 
          </nav>
  );
}

Nav.propTypes = propTypes;

export default Nav;