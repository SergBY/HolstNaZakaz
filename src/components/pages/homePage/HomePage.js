import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionOffer from './sectionOffer/SectionOffer';
import SectionStages from './sectionStages/SectionStages';
import SectionSelection from './sectionSelection/SectionSelection';
import SectionReviews from './sectionReviews/SectionReviews';

function HomePage() {
  return (
    <>
      <Header/>
      <SectionStart/>
      <SectionOffer/>
      <SectionStages/>
      <SectionSelection/>
      <SectionReviews/>
    </>
  );
}

export default HomePage;