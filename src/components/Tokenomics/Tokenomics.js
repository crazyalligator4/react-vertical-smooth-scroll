// dependencies
import React from 'react';
// components
import './Tokenomics.css';
import TokenImg from '../../images/tokenomics_static.png';
import Num2Img from '../../images/numero-2.svg';
import Num3Img from '../../images/numero-3.svg';

const Tokenomics = () => {
  return (
    <div className='TokenomicsContainer' id='tokenomics'>
      <h1 className='TokenomicsH1'>Tokenomics</h1>
      <h2 className='TokenomicsH2'>Distribution</h2>
      <img
        className='TokenomicsImg'
        src={TokenImg}
        alt='tokenomics'
      />
      <h2 className='TokenomicsH2'>Fees</h2>
      <div className='FeesContainer'>
        <div className='FeeCard'>
          <div className='CirclePercentaje' style={{background: '#EEB5A9'}}>
            <img className='FeeImg' src={Num2Img} alt='2%'/><p className='FeeP'>%</p>
          </div>
          <span>Marketing Wallet</span>
        </div>
        <div className='FeeCard'>
          <div className='CirclePercentaje' style={{background: '#FFDEAF'}}>
            <img className='FeeImg' src={Num3Img} alt='3%'/><p className='FeeP'>%</p>
          </div>
          <span>Back to liquidity Pool</span>
          {/* <span>3%</span>
          <span>Back to liquidity Pool</span> */}
        </div>
      </div>
    </div>
  )
}

export default Tokenomics;
