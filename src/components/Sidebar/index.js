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
          <SidebarLink to='home' onClick={toogle}>
            Home
          </SidebarLink>
          <SidebarLink to='features' onClick={toogle}>
            Features
          </SidebarLink>
          <SidebarLink to='tokenomics' onClick={toogle}>
            Tokenomics
          </SidebarLink>
          <SidebarLink to='roadmap' onClick={toogle}>
            Roadmap
          </SidebarLink>
          <SidebarLink to='social' onClick={toogle}>
            Social
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
