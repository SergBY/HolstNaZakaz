import React from 'react';
import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionCost from './sectionCost/SectionCost';
import Footer from '../../footer/Footer';

function CostPage() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header/>
      <SectionStart title="Печать на холсте по фото со скидкой -25%"/>
      <SectionCost/>
      <Footer/>
    </>
  );
}

export default CostPage;