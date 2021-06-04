import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionDreamArt from './SectionDreamArt/SectionDreamArt';

import Footer from '../../footer/Footer';

function DreamArtPage() {
  return (
    <>
      <Header/>
      <SectionStart title="Портрет Дрим-Арт по фото со скидкой -25%"/>
      <SectionDreamArt/>
      <Footer/>
    </>
  );
}

export default DreamArtPage;