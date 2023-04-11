/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import ChapterPage from './components/ChapterPage';
import Footer from './components/Footer';
import NotFoundRoute from './components/NotFoundRoute';
import Loading from './Loading';
import Dmca from './components/Dmca';
import Privacy from './components/Privacy';
import DisableDevtool from 'disable-devtool';

const isDarkmode = () => {
  let darkmode = JSON.parse(localStorage.getItem('darkmode'));
  if (darkmode === null || darkmode === undefined) darkmode = false;
  return darkmode;
};

const App = () => {
  const [mangaData, setMangaData] = useState(null);
  const [darkmode, setDarkmode] = useState(isDarkmode());

  //! DisableDevtool();

  const callAPI = async () => {
    try {
      const res = await fetch('http://localhost:9000/demonic-emperor');
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error('no data found');
    }
  };

  useEffect(() => {
    callAPI().then((data) => {
      setMangaData(data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('darkmode', darkmode);
  }, [darkmode]);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <BrowserRouter>
      <div className={darkmode ? 'darkmode--activated' : 'nothing'}>
        <button onClick={toggleDarkmode} className="darkmode-toggle">
          🌓
        </button>
        <Nav />
        <Routes>
          {mangaData ? (
            <>
              <Route path="/" element={<MainPage mangaData={mangaData} />} />
              <Route
                path="/:chapterNumber"
                element={<ChapterPage mangaData={mangaData} />}
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Loading />} />
              <Route path="/:chapterNumber" element={<Loading />} />
            </>
          )}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/dmca" element={<Dmca />} />
          <Route path="/not-found-404" element={<NotFoundRoute />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
