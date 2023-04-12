import React from 'react';
import { SiGmail } from 'react-icons/si';
import { CiInstagram } from 'react-icons/ci';

const ContactUS = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 px-4 text-left">
      <div className="card p-6 w-full space-y-0 lg:w-3/4 xl:w-7/12 2xl:w-3/6 md:p-10">
        <div className="contact-1 flex items-center space-x-2 ">
          <p>Instagram: demonicemperors</p>
          <a
            href="https://www.instagram.com/demonicemperors/"
            target="_blank"
            rel="noreferrer"
          >
            <CiInstagram className='font-bold text-xl' />
          </a>
        </div>
        <div className="contact-2 flex items-center space-x-2 ">
          <p>Email: prospamer2017@gmail.com</p>
          <a
            href="mailto: prospamer2017@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
