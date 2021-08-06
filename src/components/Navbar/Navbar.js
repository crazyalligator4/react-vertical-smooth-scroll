// dependencies
import React from 'react';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
// components
import './Navbar.css';

const Navbar = props => {
  return (
    <nav className='Nav'>
      <div className='NavbarContainer'>
        <LinkR to='/' className='NavLogo'>Vertical Smooth</LinkR>
        <div className='MobileIcon' onClick={props.toogle}>
          <FaBars/>
        </div>
        <ul className='NavMenu'>
          <li className='NavItem'>
            <LinkS to='about' className='NavLinks'>About</LinkS>
          </li>
          <li className='NavItem'>
            <LinkS to='discover' className='NavLinks'>Discover</LinkS>
          </li>
          <li className='NavItem'>
            <LinkS to='services' className='NavLinks'>Services</LinkS>
          </li>
          <li className='NavItem'>
            <LinkS to='signup' className='NavLinks'>Sign Up</LinkS>
          </li>
        </ul>
        <nav className='NavBtn'>
          <LinkR className='NavBtnLink' to='/signin'>Sing In</LinkR>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar;
