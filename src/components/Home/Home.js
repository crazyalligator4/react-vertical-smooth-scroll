// dependencies
import React from 'react';
// components
import './Home.css';
import homeLogo from '../../images/apesapesapesempir.png';
import pancakeLogo from '../../images/pancakeswap.png';
import poocoinLogo from '../../images/poocoin.png';

const Home = () => {
  return (
    <div id='home' className='HomeContainer'>
      <img src={homeLogo} alt='logo' className='HomeImg'/>
      <div className='ButtonsContainer'>
        <button className='ButtonItem'>Enter the app (soon)</button>
        <button className='ButtonItem'>
          <img src={pancakeLogo} alt='pancake' className='ButtonImgInline'/>
          Buy on pancake (soon)
        </button>
        <button className='ButtonItem'>
          <img src={poocoinLogo} alt='poocoin' className='ButtonImgInline'/>
          Poocoin Chart (soon)
        </button>
      </div>
    </div>
  )
}

export default Home;
