import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import ChapterPage from './components/ChapterPage';
import Footer from './components/Footer'
import NotFoundRoute from './components/NotFoundRoute'

const App = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/privacy' element={<Privacy />} /> */}
        <Route path='/:chapterNumber' element={<ChapterPage />} />
        <Route path='/not-found-404' element={<NotFoundRoute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
