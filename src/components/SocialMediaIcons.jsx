import React from 'react';
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-8 gap-7'>
      <a
        href='/linkedIn.com'
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 transition duration-500'
      >
        <AiFillLinkedin size={30} />
      </a>
      <a
        href='/facebook.com'
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 transition duration-500'
      >
        <AiFillFacebook size={30} />
      </a>
      <a
        href='/linkedIn.com'
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 transition duration-500'
      >
        <BsTelegram size={30} />
      </a>
      <a
        href='/linkedIn.com'
        target='_blank'
        rel='noreferrer'
        className='hover:opacity-50 transition duration-500'
      >
        <AiFillInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
