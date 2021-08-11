// dependencies
import React from 'react';
// components
import './Footer.css';
import twitterLogo from '../../images/twitter.svg';
import telegramLogo from '../../images/telegram.svg';

const Footer = () => {
  return (
    <div className='FooterContainer'>
      <section className='FooterSocial'>
        <p>Socials</p>
        <img
          src={twitterLogo} alt='twitter' 
          style={{height: '30px', width: '30px', margin: '6px', cursor: 'pointer'}}
          onClick={() => window.location.href='https://twitter.com/ApesOfEmpires'}
        />
        <img
          src={telegramLogo} alt='telegram' 
          style={{height: '30px', width: '30px', margin: '6px', cursor: 'pointer'}}
          onClick={() => window.location.href='https://t.me/apesofempires'}
        />
      </section>
      <footer className='Copyrights'>
        <div>Copyright © 2021.All Rights Reserved By Apes of Empires</div>
      </footer>
    </div>
  )
}

export default Footer;
