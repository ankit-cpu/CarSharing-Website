import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.0s all ease;
    }
`;

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR) `
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;
export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul `
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;

export const NavItem = styled.li `
    height: 80px;
`;

export const NavLinks = styled(LinkS) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavL = styled(LinkR) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR) `
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const NavI = styled.div `
    background: #15171c;
    height: 80px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
`;

export const NavIcon = styled(LinkR) `
    margin-left: 7rem;
    font-size: 2rem;
    height: 80px;
    display:flex;
    justify-content:flex-start;
    align-items: center;
    cursor: pointer;
    
    @media screen and (max-width:1400px){
        margin-left: 0.5rem;
    }
`;

export const SidebarNav = styled.nav `
    background: #15171c;
    width: 250px;
    height: 100vh;
    display:flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left:${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

 export const SidebarWrap = styled.div `
    width: '100%';
`;