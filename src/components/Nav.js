import React from 'react';
import { Link } from 'react-router-dom';
import Darkmode from 'darkmode-js';


const Nav = () => {
  const options = {
    bottom: '90%',
    right: 'unset',
    left: '32px',
    time: '0.5s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#eee',
    saveInCookies: true,
    label: '🌓',
    autoMatchOsTheme: true
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  return (
    <>
      <nav className="flex flex-col justify-center items-center space-y-6 text-white">
        <div className="heading font-bold text-4xl text-center border-4 p-4 max-w-4xl">
          <h1>DEMONIC EMPEROR MANGA ONLINE ARABIC SCANS HIGH QUALITY</h1>
        </div>
        <p className='text-center'>Read Demonic Emperor Manga Online in High Quality Arabic Scans</p>
      </nav>
      <div className="menu p-2 bg-opacity-30 bg-white text-center">
        <ul className="flex flex-row justify-center items-center h-14 font-bold md:text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/0/">Read First Chapter </Link>
          </li>
          <li>
            <Link to="/privacy/"> Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
