import './nav.css';
import Login from '../login/Login';
import { Navigation } from '../constants';

function Nav(props) {
  return(
      <nav className="menu">
            <ul className="menu__list">
              {props.nav.map(link => {
                if (link.dropdown) {
                  return (
                    <li className="menu__list-item menu__dropdown">
                      <div className="menu__dropdown-arr">
                        <a className="menu__list-link" href="{link.path}">{link.name}</a>
                        <div className="arr"></div>
                      </div>
                      <ul className="dropdown">
                        {link.dropdown.map(drop => 
                          <li><a href={drop.path}>{drop.name}</a></li>
                        )}
                      </ul>
                    </li>
                  )
                }
                return (
                  <li className="menu__list-item">
                    <a className="menu__list-link" href="{link.path}">{link.name}</a>
                  </li>
                )
              })}
            </ul>
            <Login/>
          </nav>
  );
}

export default Nav;