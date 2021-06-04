import React from 'react';
import './App.css';
import HomePage from './components/pages/homePage/HomePage';
import PrintingPage from './components/pages/printingPage/PrintingPage';
import CollagePage from './components/pages/collagePage/CollagePage';
import PaintingPage from './components/pages/paintingPage/PaintingPage';
import LoveIsPage from './components/pages/loveIsPage/LoveIsPage';
import InCharacterPage from './components/pages/inCharacterPage/InCharacterPage';
import DreamArtPage from './components/pages/dreamArtPage/DreamArtPage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <PrintingPage/>
      <CollagePage/>
      <PaintingPage/>
      <LoveIsPage/>
      <InCharacterPage/>
      <DreamArtPage/> */}
    </div>
  );
}

export default App;
