// dependencies
import React from 'react';
// components
import './InfoSection.css';
import carImg from '../../images/car.svg'

const InfoSection = () => {
  return (
    <div className='InfoContainer' id='id'>
      <div className='InfoWraper'>
        <div className='InfoRow'>
          <div className='Column1'>
            <div className='TextWraper'>
              <p className='Topline'>Topline</p>
              <h1 className='Heading'>Heading</h1>
              <p className='Subtitle'>Subtitle</p>
              <div className='BtnWrap'>
                <button to='home'>Home</button>
              </div>
            </div>
          </div>
          <div className='Column2'>
            <div className='ImgWrap'>
              <img className='Img' alt='img' src={carImg}>

              </img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection;
