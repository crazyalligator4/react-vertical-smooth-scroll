// dependencies
import React, {useState} from 'react'
import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
// components
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

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
