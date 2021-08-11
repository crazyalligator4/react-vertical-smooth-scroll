// dependencies
import React, {useState} from 'react'
// components
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Home from '../Home/Home';
import InfoSection from '../InfoSection';
import Features from '../Features';
import {homeObjOne, homeObjThree, homeObjTwo} from '../InfoSection/data';
import Tokenomics from '../Tokenomics/Tokenomics';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle}/>
      <Home/>
      <Features/>
      <Tokenomics/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
    </>
  )
}

export default Main;
