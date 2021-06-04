import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionPhotomosaic from './SectionPhotomosaic/SectionPhotomosaic';

import Footer from '../../footer/Footer';

function PhotomosaicPage() {
  return (
    <>
      <Header/>
      <SectionStart title="Фотомазаика на холсте со скидкой -25%"/>
      <SectionPhotomosaic/>
      <Footer/>
    </>
  );
}

export default PhotomosaicPage;