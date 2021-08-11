// dependencies
import React from 'react';
// components
import {
  SidebarContainer, Icon, SidebarWrapper, SidebarMenu,
  SidebarLink, SideBtnWrap, SidebarRoute, CloseIcon
} from './SidebarElements';

const Sidebar = ({isOpen, toogle}) => {
  return (
    <SidebarContainer onClick={toogle} isOpen={isOpen}>
      <Icon onClick={toogle}> 
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>
            About
          </SidebarLink>
          <SidebarLink to='discover'>
            Discover
          </SidebarLink>
          <SidebarLink to='services'>
            Services
          </SidebarLink>
          <SidebarLink to='signup'>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;