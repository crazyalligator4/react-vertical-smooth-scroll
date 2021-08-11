// dependencies
import React from 'react';
// components
import {
  InfoContainer, InfoWraper, InfoRow, Column1,
  TextWraper, Topline, Heading, Subtitle, BtnWrap,
  Column2, ImgWrap, Img,
} from './InfoSectionElemets';
import {Button} from '../Basics/Button/ButtonElement';

const InfoSection = () => {
  return (
    <InfoContainer id='about'>
      <InfoWraper>
        <InfoRow>
          <Column1>
            <TextWraper>
              <Topline>Topline</Topline>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrap>
                <Button to='home'>Home</Button>
              </BtnWrap>
            </TextWraper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img/>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWraper>
    </InfoContainer>
  )
}

export default InfoSection;
