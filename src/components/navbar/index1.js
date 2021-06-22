import React, {useState, useEffect} from 'react';
import {Nav, NavBtn, NavBtnLink,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavL, NavI, NavIcon, SidebarWrap, SidebarNav} from './navbarElement';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from '../sidebar/sidebarData';
import SubMenu from './submenu';



const NavbarBrowse = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
            
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </NavIcon>
                {SidebarData.map((item, index)=> {
                    return <SubMenu item={item} key={index}/>
                })}
                </SidebarWrap>
            </SidebarNav>
            
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>FastRides</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavL to='/rider' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Take a trip</NavL>
                        </NavItem>
                        <NavItem>
                            <NavL to='/driver' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Make a trip</NavL>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/'>Sign Out</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavbarBrowse;
