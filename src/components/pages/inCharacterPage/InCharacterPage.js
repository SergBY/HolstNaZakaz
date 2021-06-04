import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionInCharacter from './SectionInCharacter/SectionInCharacter';

import Footer from '../../footer/Footer';

function PrintingPage() {
  return (
    <>
      <Header/>
      <SectionStart/>
      <SectionInCharacter/>
      <Footer/>
    </>
  );
}

export default PrintingPage;