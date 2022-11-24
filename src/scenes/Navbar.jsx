import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  // 'Home'->'home'
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
    hover:text-yellow transition duration-500
    `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px');
  const navBackground = isTopOfPage ? '' : 'bg-red';

  return (
    <nav className={`${navBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-3xl font-bold'>XB</h4>

        {/* desktop nav - shown on screens above 768px */}
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={selectedPage}
            />
            <Link
              page='Skills'
              selectedPage={selectedPage}
              setSelectedPage={selectedPage}
            />
            <Link
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={selectedPage}
            />
            <Link
              page='Testimonials'
              selectedPage={selectedPage}
              setSelectedPage={selectedPage}
            />
            <Link
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={selectedPage}
            />
          </div>
        ) : (
          <button
            className='rounded-full bg-red p-2 '
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <GoThreeBars />
          </button>
        )}

        {/* mobile modal popup */}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
            {/* close icon */}
            <div className='flex justify-end px-16 py-9'>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <GrClose />
              </button>
            </div>
            {/* menu items */}
            <div className=' flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
              <Link
                page='Home'
                selectedPage={selectedPage}
                setSelectedPage={selectedPage}
              />
              <Link
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={selectedPage}
              />
              <Link
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={selectedPage}
              />
              <Link
                page='Testimonials'
                selectedPage={selectedPage}
                setSelectedPage={selectedPage}
              />
              <Link
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={selectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
