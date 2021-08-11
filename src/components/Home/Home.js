// dependencies
import React, {useState} from 'react'
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
// components
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Navbar toogle={toogle}/>
      <HeroSection/>
      <InfoSection/>
    </>
  )
}

export default Home
