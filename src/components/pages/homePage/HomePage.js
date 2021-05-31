import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionOffer from './sectionOffer/SectionOffer';
import SectionStages from './sectionStages/SectionStages';
import SectionSelection from './sectionSelection/SectionSelection';

function HomePage() {
  return (
    <>
      <Header/>
      <SectionStart/>
      <SectionOffer/>
      <SectionStages/>
      <SectionSelection/>
    </>
  );
}

export default HomePage;