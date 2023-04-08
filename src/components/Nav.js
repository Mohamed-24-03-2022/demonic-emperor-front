import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="flex flex-col justify-center items-center space-y-6 text-white">
        <div className="heading font-bold text-4xl text-center border-4 p-4 max-w-4xl">
          <h1>DEMONIC EMPEROR MANGA ONLINE ARABIC SCANS HIGH QUALITY</h1>
        </div>
        <p>Read Demonic Emperor Manga Online in High Quality Arabic Scans</p>
      </nav>
      <div className="menu p-2 bg-opacity-30 bg-white">
        <ul className="flex flex-row justify-center items-center h-14 font-bold text-lg">
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