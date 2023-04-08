import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import ChapterPage from './components/ChapterPage';
import Privacy from './components/Privacy'
import Footer from './components/Footer'
import NotFoundRoute from './components/NotFoundRoute'
import demonicEmperorJson from './assets/demonicEmperor.json';

const App = () => {
  const mangaData = JSON.parse(JSON.stringify(demonicEmperorJson))[0];

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage mangaData={mangaData} />} />
        <Route path='/:chapterNumber' element={<ChapterPage mangaData={mangaData} />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/not-found-404' element={<NotFoundRoute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
