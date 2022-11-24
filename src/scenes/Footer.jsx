import React from 'react';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className='h-36 bg-red py-2'>
      <div className='w-10/12 mx-auto'>
        <SocialMediaIcons />
        <div className='flex justify-center md:justify-between items-center text-center'>
          <p className='font-playfair font-semibold text-xl text-yellow'>
            Xenia Baranova
          </p>
          <p className='font-playfair text-md text-yellow ml-3'>
            ©️{new Date().getFullYear()} XeniaB. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
