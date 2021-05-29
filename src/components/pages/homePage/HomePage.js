import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionOffer from './sectionOffer/SectionOffer';
import SectionStages from './sectionStages/SectionStages';

function HomePage() {
  return (
    <>
      <Header/>
      <SectionStart/>
      <SectionOffer/>
      <SectionStages/>
    </>
  );
}

export default HomePage;