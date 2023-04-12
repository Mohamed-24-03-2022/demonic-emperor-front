import React from 'react';
import { SiGmail } from 'react-icons/si';
import { CiInstagram } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 500, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full flex flex-col p-2 justify-center items-center mt-auto md:p-4">
      <div>
        <p>افضل موقع عربي لقراءة الامبراطور الشيطاني</p>
      </div>
      <div className="contact-us space-x-1 ">
        <Link
          onClick={handleClick}
          className="min-w-max hover:underline"
          to="/contact-us"
        >
          <p className="inline">Contact Us</p>
        </Link>
        <a
          href="https://www.instagram.com/demonicemperors/"
          target="_blank"
          rel="noreferrer"
        >
          <CiInstagram className="inline" />
        </a>

        <a
          href="mailto: prospamer2017@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail className="inline" />
        </a>
      </div>
      <div className="privacy-policy w-1/4 flex justify-center space-x-3">
        <Link
          onClick={handleClick}
          to="/privacy/"
          className="min-w-max hover:underline"
        >
          {' '}
          Privacy Policy
        </Link>
        <Link onClick={handleClick} to="/dmca/" className="hover:underline">
          {' '}
          DMCA
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
