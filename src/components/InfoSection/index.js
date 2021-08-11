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
    lightBg, imgStart, topLine, lightText, headLine,
    darkText, description, img, alt, id, buttonLabel,
    primary, dark2,
  }
) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWraper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWraper>
              <Topline>{topLine}</Topline>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >{buttonLabel}</Button>
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
