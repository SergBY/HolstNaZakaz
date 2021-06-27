import React from 'react';
import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionCollage from './sectionCollage/SectionCollage';

import Footer from '../../footer/Footer';

function PrintingPage() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <SectionStart title="Коллаж из фото на холсте со скидкой -25%"/>
      <SectionCollage/>
      <Footer/>
    </>
  );
}

export default PrintingPage;