// dependencies
import React, {useState} from 'react';
// components
import './HeroSection.css';
import {Link as LinkS} from 'react-scroll';
import Video from '../../videos/video.mp4';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }

  return (
    <div className='HeroContainer'>
      <div className='HeroBackground'>
        <video
          autoPlay loop muted
          src={Video} type='video/mp4'
          className='VideoBackground'
        />
      </div>
      <div className='HeroContent'>
        <h1 className='HeroH1'>Header 1</h1>
        <p className='HeroP'>Sign Up for a free acount and receive $15</p>
        <div className='HeroBtnWraper'>
          <LinkS
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            className='Button'
          >
            Get Started {
            hover
              ? <MdArrowForward className='ArrowForward'/>
              : <MdKeyboardArrowRight className='ArrowRight'/>
            }
          </LinkS>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
