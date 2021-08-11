// dependencies
import React from 'react';
// components
import './Tokenomics.css';
import TokenImg from '../../images/tokenomics_static.png';

const Tokenomics = () => {
  return (
    <div className='TokenomicsContainer'>
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
          <span>2%</span>
          <span>Marketing Wallet</span>
        </div>
        <div className='FeeCard'>
          <span>3%</span>
          <span>Back to liquidity Pool</span>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics;
