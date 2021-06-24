import React from 'react';
import './App.css';
import HomePage from './components/pages/homePage/HomePage';
import PrintingPage from './components/pages/printingPage/PrintingPage';
import CollagePage from './components/pages/collagePage/CollagePage';
import PaintingPage from './components/pages/paintingPage/PaintingPage';
import LoveIsPage from './components/pages/loveIsPage/LoveIsPage';
import InCharacterPage from './components/pages/inCharacterPage/InCharacterPage';
import DreamArtPage from './components/pages/dreamArtPage/DreamArtPage';
import PhotomosaicPage from './components/pages/photomosaicPage/PhotomosaicPage';
import PortraitOilPage from './components/pages/portraitOilPage/PortraitOil';
import CostPage from './components/pages/costPage/CostPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/printing'>
            <PrintingPage/>
          </Route>
          <Route path='/collage'>
            <CollagePage/>
          </Route>
          <Route path='/painting'>
            <PaintingPage/>
          </Route>
          <Route path='/loveis'>
            <LoveIsPage/>
          </Route>
          <Route path='/character'>
            <InCharacterPage/>
          </Route>
          <Route path='/dreemart'>
            <DreamArtPage/>
          </Route>
          <Route path='/photomosaic'>
            <PhotomosaicPage/>
          </Route>
          <Route path='/oil'>
            <PortraitOilPage/>
          </Route>
          <Route path='/cost'>
            <CostPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
