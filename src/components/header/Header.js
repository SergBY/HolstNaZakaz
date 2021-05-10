import './header.css';
import Logo from '../logo/Logo';
import Nav from '../navigation/nav';
import Phone from '../phone/Phone';

function Header() {
  return (
      <header class="header wrap">
        <div class="header__inner">
          <Logo/>
          <Nav/>
        </div>
        <Phone/>
      </header>
  );
}

export default Header;
