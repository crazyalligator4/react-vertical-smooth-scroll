// dependencies
import React, {useState} from 'react'
// components
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Home from '../Home/Home';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import Services from '../Services';
import {homeObjOne, homeObjThree, homeObjTwo} from '../InfoSection/data';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle}/>
      <HeroSection/>
      <Home/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
    </>
  )
}

export default Main;
