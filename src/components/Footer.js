import React from 'react';
import { SiGmail } from 'react-icons/si';
import { CiInstagram } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col p-2 justify-center items-center mt-auto md:p-4">
      <div>
        <p>افضل موقع عربي لقراءة الامبراطور الشيطاني</p>
      </div>
      <div className="contact-us space-x-1 sm:space-x-3 ">
        <a
          href="mailto: prospamer2017@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail className="inline" />
        </a>
        <a
          href="https://www.instagram.com/demonicemperors/"
          target="_blank"
          rel="noreferrer"
        >
          <CiInstagram className="inline" />
        </a>
        <p className="inline mx-1">تواصل معنا</p>
      </div>
      <div className=' w-1/4 flex justify-center space-x-3'>
        <Link to="/privacy/" className='min-w-max hover:underline'> Privacy Policy</Link>
        <Link to="/dmca/" className='hover:underline'> DMCA</Link>
      </div>
    </footer>
  );
};

export default Footer;
