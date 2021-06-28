import React from 'react';
import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionLoveIs from './sectionLoveIs/SectionLoveIs';

import Footer from '../../footer/Footer';

function LoveIsPage() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <SectionStart title="Портрет Love Is по фото со скидкой -25%"/>
      <SectionLoveIs/>
      <Footer/>
    </>
  );
}

export default LoveIsPage;