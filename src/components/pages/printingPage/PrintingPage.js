import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionPrintingPhoto from './sectionPrintingPhoto/SectionPrintingPhoto';

import Footer from '../../footer/Footer';

function PrintingPage() {
  return (
    <>
      <Header/>
      <SectionStart/>
      <SectionPrintingPhoto/>
      <Footer/>
    </>
  );
}

export default PrintingPage;