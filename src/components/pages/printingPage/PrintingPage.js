import React from 'react';
import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionPrintingPhoto from './sectionPrintingPhoto/SectionPrintingPhoto';

import Footer from '../../footer/Footer';

function PrintingPage() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <SectionStart title="Печать на холсте по фото со скидкой -25%"/>
      <SectionPrintingPhoto/>
      <Footer/>
    </>
  );
}

export default PrintingPage;