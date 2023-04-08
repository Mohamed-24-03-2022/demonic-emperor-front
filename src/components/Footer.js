import React from 'react';
import { SiGmail } from 'react-icons/si'
import { CiFacebook } from 'react-icons/ci'
const Footer = () => {
  return (
    <footer className="w-full flex flex-col p-2 justify-center items-center space-y-2 mt-auto md:p-4">
      <div>
        <p>افضل موقع عربي لقراءة الامبراطور الشيطاني</p>
      </div>
      <div className="contact-us ">
        <a href="mailto: mohakatalonya@gmail.com" target='_blank' rel="noreferrer" >
          <SiGmail className='inline mx-2' />
        </a>
        <p className='inline '>تواصل معنا</p>
      </div>
    </footer>
  );
};

export default Footer;
