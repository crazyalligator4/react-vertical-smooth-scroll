// dependencies
import React, {useState} from 'react'
// components
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Home from '../Home/Home';
// import InfoSection from '../InfoSection';
import Features from '../Features';
// import {homeObjOne, homeObjThree, homeObjTwo} from '../InfoSection/data';
import Tokenomics from '../Tokenomics/Tokenomics';
import Roadmap from '../Roadmap';
import Footer from '../Footer/Footer';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => {setIsOpen(!isOpen); console.log('click');}

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle}/>
      <Home/>
      <Features/>
      <Tokenomics/>
      <Roadmap/>
      <Footer/>
    </>
  )
}

export default Main;
