import React,{useState} from 'react'
import NavbarBrowse from '../components/navbar/index1'
import Profile from '../components/profies'
import Sidebar from '../components/sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '../components/heroSection';


const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavbarBrowse toggle={toggle} />
            <Profile/>
        </>
    )
}

export default ProfilePage
