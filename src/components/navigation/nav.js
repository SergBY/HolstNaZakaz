import './nav.css';
import Login from '../login/Login';

function Nav() {
  return(
      <nav class="menu">
            <ul class="menu__list">
              <li class="menu__list-item">
                <a class="menu__list-link" href="#">Главная</a>
              </li>
              <li class="menu__list-item">
                <a class="menu__list-link" href="#">О печати на холсте</a>
              </li>
              <li class="menu__list-item menu__dropdown">
                <div class="menu__dropdown-arr">
                  <a class="menu__list-link" href="#">Портреты на холсте</a>
                  <div class="arr"></div>
                </div>
                <ul class="dropdown">
                  <li><a href="#">Живопись</a></li>
                  <li><a href="#">Дрим-арт</a></li>
                  <li><a href="#">Фотокаллаж</a></li>
                  <li><a href="#">Портрет маслом</a></li>
                  <li><a href="#">Портрет в образе</a></li>
                  <li><a href="#">Фотомазайка</a></li>
                  <li><a href="#">Love-is</a></li>
                </ul>
              </li>
              <li class="menu__list-item">
                <a class="menu__list-link" href="#">Контакты</a>
              </li>
            </ul>
            <Login/>
          </nav>
  );
}

export default Nav;