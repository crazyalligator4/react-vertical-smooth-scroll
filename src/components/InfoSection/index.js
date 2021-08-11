// dependencies
import React from 'react';
// components
import {
  InfoContainer, InfoWraper, InfoRow, Column1,
  TextWraper, Topline, Heading, Subtitle, BtnWrap,
  Column2, ImgWrap, Img,
} from './InfoSectionElements';
import {Button} from '../Basics/Button/ButtonElement';

const InfoSection = (
  {
    lightBg, imgStart, topline, lightText, heading,
    darkText, description, img, alt, id,
  }
) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWraper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWraper>
              <Topline>{topline}</Topline>
              <Heading lightText={lightText}>{heading}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button to='home'>Home</Button>
              </BtnWrap>
            </TextWraper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt}/>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWraper>
    </InfoContainer>
  )
}

export default InfoSection;
