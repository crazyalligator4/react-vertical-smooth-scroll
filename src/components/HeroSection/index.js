// dependencies
import React, {useState} from 'react';
// components
import {
  HeroContainer, HeroBackground, VideoBackground, HeroContent,
  HeroH1, HeroP, HeroBtnWraper, ArrowForward, ArrowRight,
} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../Basics/Button/ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground
          autoPlay loop muted
          src={Video} type='video/mp4'
        />
      </HeroBackground>
      <HeroContent>
        <HeroH1>Header 1</HeroH1>
        <HeroP>Sign Up for a free acount and receive $15</HeroP>
        <HeroBtnWraper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get Started {
            hover
              ? <ArrowForward/>
              : <ArrowRight/>
            }
          </Button>
        </HeroBtnWraper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
