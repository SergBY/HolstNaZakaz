import React from 'react';
import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionPortraitOil from './SectionPortraitOil/SectionPortraitOil';

import Footer from '../../footer/Footer';

function PortraitOilPage() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <SectionStart title="Портрет маслом на холсте со скидкой -25%"/>
      <SectionPortraitOil/>
      <Footer/>
    </>
  );
}

export default PortraitOilPage;