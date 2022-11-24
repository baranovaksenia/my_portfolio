import React, { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Contact from './scenes/Contact';
import DotGroup from './scenes/DotGroup';
import Footer from './scenes/Footer';
import Hero from './scenes/Hero';
import Navbar from './scenes/Navbar';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // runs when component is loaded
  }, []);

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        {/* navigate to contact page */}
        <Hero setSelectedPage={setSelectedPage} />
      </div>
      <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
