import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import MangaPage from './components/MangaPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:chapNum' element={<MangaPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
