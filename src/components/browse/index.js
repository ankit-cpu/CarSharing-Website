import React, {useState} from 'react';
import Footer from '../footer';
import InfoSection from '../infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../infoSection/data';
import NavbarBrowse from '../navbar/index1';
import Services from '../services';
import Sidebar from '../sidebar';
import BrowseHeroSection from '../heroSection/index1';


const Browse = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <NavbarBrowse toggle={toggle}/>
        <BrowseHeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Services/>
        <Footer/>
        </>
    )
}

export default Browse

