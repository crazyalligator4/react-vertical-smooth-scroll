// dependencies
import React, {useState} from 'react'
// components
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import {homeObjOne, homeObjThree, homeObjTwo} from '../InfoSection/data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
    </>
  )
}

export default Home
