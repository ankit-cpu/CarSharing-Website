import React,{useState} from 'react'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const NavI = styled.div `
    background: #15171c;
    height: 80px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link) `
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

const SidebarNav = styled.nav `
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

const SidebarWrap = styled.div `
    width: '100%';
`;

const SideBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <NavI>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
            </NavI>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </NavIcon>
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default SideBar
