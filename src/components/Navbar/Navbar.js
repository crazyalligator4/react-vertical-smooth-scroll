// dependencies
import React from 'react';
import {Link as LinkR} from 'react-router-dom';
// components
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='Nav'>
      <div className='NavbarContainer'>
        <LinkR to='/' className='NavLogo'>
          Dolla
        </LinkR>
      </div>
    </nav>
  )
}
