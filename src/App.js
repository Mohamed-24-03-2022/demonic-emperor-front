import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import ChapterPage from './components/ChapterPage';
import Footer from './components/Footer';
import NotFoundRoute from './components/NotFoundRoute';
import Loading from './Loading';
import Dmca from './components/Dmca'
import Privacy from './components/Privacy';
import Darkmode from 'darkmode-js';


import DisableDevtool from 'disable-devtool';

const starter = () => {
  const options = {
    bottom: '90%',
    right: 'unset',
    left: '32px',
    time: '0s',
    mixColor: '#00000000',
    backgroundColor: '#00000000',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,
    label: '🌓',
    autoMatchOsTheme: true
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  //! DisableDevtool();
}

const App = () => {
  starter();
  const [mangaData, setMangaData] = useState(null);

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

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
