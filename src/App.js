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
import ContactUs from './components/ContactUS'
// import DisableDevtool from 'disable-devtool';

const isDarkmode = () => {
  let darkmode = JSON.parse(localStorage.getItem('darkmode'));
  if (darkmode === null || darkmode === undefined) darkmode = false;
  return darkmode;
};

const App = () => {
  const [mangaData, setMangaData] = useState(null);
  const [darkmode, setDarkmode] = useState(isDarkmode());

  // <script src="https://www.unpkg.com/disabel-console@1.0.0/index.js"></script>
  // DisableDevtool();

  const callAPI = async () => {
    try {
      const res = await fetch('https://demonic-emperor-server.fly.dev/demonic-emperor');
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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/not-found-404" element={<NotFoundRoute />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
