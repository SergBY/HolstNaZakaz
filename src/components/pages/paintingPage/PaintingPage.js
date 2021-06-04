import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionPortraitAsPainting from './sectionPortraitAsPainting/SectionPortraitAsPainting';

import Footer from '../../footer/Footer';

function PrintingPage() {
  return (
    <>
      <Header/>
      <SectionStart title="Портрет под живопись со скидкой -25%"/>
      <SectionPortraitAsPainting/>
      <Footer/>
    </>
  );
}

export default PrintingPage;