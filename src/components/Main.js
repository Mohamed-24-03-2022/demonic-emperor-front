import React, { useEffect } from 'react';
import demonicEmperorJson from '../assets/demonicEmperor.json';
import { Link } from 'react-router-dom';
import ChapterList from './ChapterList'
import mangaImg from '../assets/manga-img.jpg'
import LandingPage from './LandingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MangaPage from './MangaPage'


const Main = () => {
  const demonicEmperor = JSON.parse(JSON.stringify(demonicEmperorJson))[0];

  useEffect(() => {
    document.querySelector('.img-container').classList.add('ezpz');
    // create random element to create a class for it
    // create class
    // select it
    // apply it to the targeted element (not the first random element)
    // remove random element

    //or use this createCSSSelector('.myCssClass', 'display:none');
  }, [])

  return (
    <div className="flex flex-col items-center py-10 px-10 space-x-8 text-right w-full md:px-10">
      <div className="card p-10 w-full space-y-10 lg:w-4/6 ">
        <LandingPage />
      </div>
    </div>
  );
};

export default Main;
