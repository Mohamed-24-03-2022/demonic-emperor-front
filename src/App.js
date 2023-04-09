import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import ChapterPage from './components/ChapterPage';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import NotFoundRoute from './components/NotFoundRoute';
import Loading from './Loading';

const App = () => {

  const [mangaData, setMangaData] = useState(null);

  const callAPI = async () => {
    try {
      const res = await fetch('http://localhost:9000/testAPI');
      console.log(res);
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


  if (!mangaData) {
    return (
      <BrowserRouter>
        <Nav />
        <Loading />
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage mangaData={mangaData} />} />
        <Route
          path="/:chapterNumber"
          element={<ChapterPage mangaData={mangaData} />}
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/not-found-404" element={<NotFoundRoute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
