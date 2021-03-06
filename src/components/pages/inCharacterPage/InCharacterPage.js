import React from 'react';
import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionInCharacter from './SectionInCharacter/SectionInCharacter';

import Footer from '../../footer/Footer';

function PrintingPage() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <SectionStart title="Портрет в образе по фото со скидкой -25%"/>
      <SectionInCharacter/>
      <Footer/>
    </>
  );
}

export default PrintingPage;