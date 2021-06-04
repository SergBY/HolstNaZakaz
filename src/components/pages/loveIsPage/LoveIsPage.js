import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionLoveIs from './sectionLoveIs/SectionLoveIs';

import Footer from '../../footer/Footer';

function LoveIsPage() {
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