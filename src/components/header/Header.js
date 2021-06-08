import React from 'react';
import './header.css';
import Logo from '../logo/Logo';
import Nav from '../navigation/Navigation';
import Phone from '../phone/Phone';
import { MainLogo, Navigation, MainPhone } from '../../constants';

function Header() {
  return (
      <header className="header wrap">
        <div className="header__inner">
          <Logo logo={MainLogo}/>
          <Phone mainPhone={MainPhone}/>
          <Nav nav={Navigation}/>
        </div>
      </header>
  );
}

export default Header;
