// dependencies
import React from 'react';
import {FaBars} from 'react-icons/fa';
// components
import {
  Nav, NavbarContainer, NavLogo,
  MobileIcon, NavMenu, NavItem, NavLinks,
  NavBtn, NavBtnLink,
} from './NavbarElements';
import logo from '../../images/apeslogomini.png';
import twitterLogo from '../../images/twitter.svg';
import telegramLogo from '../../images/telegram.svg';

const Navbar = props => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <img src={logo} alt='logo' style={{height: '100px', width: '200px'}}/>
        </NavLogo>
        <MobileIcon onClick={props.toogle}>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about' className='NavLinks'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='home' className='NavLinks'>Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='discover' className='NavLinks'>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='services' className='NavLinks'>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='signup' className='NavLinks'>Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          {/* <NavBtnLink to='/signin'>Sing In</NavBtnLink> */}
          <img
            src={twitterLogo} alt='twitter' 
            style={{height: '30px', width: '30px', margin: '6px', cursor: 'pointer'}}
            onClick={() => window.location.href='https://twitter.com/ApesOfEmpires'}
          />
          {/* <img src={telegramLogo} alt='telegram' style={{height: '30px', width: '30px', margin: '4px'}}/> */}
          <img
            src={telegramLogo} alt='telegram' 
            style={{height: '30px', width: '30px', margin: '6px', cursor: 'pointer'}}
            onClick={() => window.location.href='https://t.me/apesofempires'}
          />
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
