import Header from '../../header/Header';
import SectionStart from '../../sectionStart/SectionStart';
import SectionOffer from './sectionOffer/SectionOffer';
import SectionStages from './sectionStages/SectionStages';
import SectionSelection from './sectionSelection/SectionSelection';
import SectionReviews from './sectionReviews/SectionReviews';
import SectionQuestions from './sectionQuestions/SectionQuestions';
import Footer from '../../footer/Footer';

function HomePage() {
  return (
    <>
      <Header/>
      <SectionStart/>
      <SectionOffer/>
      <SectionStages/>
      <SectionSelection/>
      <SectionReviews/>
      <SectionQuestions/>
      <Footer/>
    </>
  );
}

export default HomePage;