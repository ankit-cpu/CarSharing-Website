import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarRoute, SidebarLink, SideBtnWrap, SidebarMenu} from './sidebarElement'

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='rider' onClick={toggle}>Rider</SidebarLink>
                    <SidebarLink to='driver' onClick={toggle}>Driver</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='/signup' onClick={toggle}>SignUp</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
