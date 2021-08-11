// dependencies
import React from 'react';
import {FaBars} from 'react-icons/fa';
// components
import {
  Nav, NavbarContainer, NavLogo,
  MobileIcon, NavMenu, NavItem, NavLinks,
  NavBtn, NavBtnLink,
} from './NavbarElements';

const Navbar = props => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>Vertical Smooth</NavLogo>
        <MobileIcon onClick={props.toogle}>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about' className='NavLinks'>About</NavLinks>
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
          <NavBtnLink to='/signin'>Sing In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
