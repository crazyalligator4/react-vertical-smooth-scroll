// dependencies
import React from 'react';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
// components
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='Nav'>
      <div className='NavbarContainer'>
        <LinkR to='/' className='NavLogo'>Vertical Smooth</LinkR>
        <div className='MobileIcon'>
          <FaBars/>
        </div>
        <ul className='NavMenu'>
          <li className='NavItem'>
            <LinkS to='about' className='NavLinks'>About</LinkS>
          </li>
        </ul>
      </div>
    </nav>
  )
}
