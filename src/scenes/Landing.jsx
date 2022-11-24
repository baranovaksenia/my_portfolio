import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return <div>Landing</div>;
};

export default Landing;
