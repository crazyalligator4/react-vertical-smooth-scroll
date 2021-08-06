// dependencies
import React from 'react';
// components
import './HeroSection.css';
import Video from '../../videos/video.mp4';

function HeroSection() {
  return (
    <div className='HeroContainer'>
      <div className='HeroBackground'>
        <video
          autoPlay loop muted
          src={Video} type='video/mp4'
          className='VideoBackground'
        />
      </div>  
    </div>
  )
}

export default HeroSection
