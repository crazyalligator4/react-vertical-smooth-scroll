// dependencies
import React from 'react';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
// components
import './Sidebar.css';
import {FaTimes} from 'react-icons/fa';

const Sidebar = props => {
  const sidebarClassname = `SidebarContainer--${props.isOpen ? 'opened' : 'closed'}`;

  return (
    <aside className={sidebarClassname} onClick={props.toogle}>
      <div className='Icon' onClick={props.toogle}> 
        <FaTimes className='CloseIcon'></FaTimes>
      </div>
      <div className='SidebarWrapper'>
        <ul className='SidebarMenu'>
          <LinkS to='about' className='SidebarLink'>
            About
          </LinkS>
          <LinkS to='discover' className='SidebarLink'>
            Discover
          </LinkS>
          <LinkS to='services' className='SidebarLink'>
            Services
          </LinkS>
          <LinkS to='signup' className='SidebarLink'>
            Sign Up
          </LinkS>
        </ul>
        <div className='SideBtnWrap'>
          <LinkR className='SidebarRoute' to='/signin'>Sign In</LinkR>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;
