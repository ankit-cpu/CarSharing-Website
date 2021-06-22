import React, {useState} from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroP, HeroH1, ArrowForward, ArrowRight, HeroContent} from './heroElement';
import Video from '../../videos/video.mp4';
import {Button} from '../buttonElement'
import { useHistory } from 'react-router-dom';


const BrowseHeroSection = () => {
    const[hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    const history = useHistory();


    return (
            <HeroContainer id='home'>
                <HeroBg> 
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Ride Sharing Made Easy</HeroH1>
                    <HeroP>
                         Start sharing rides to save your money.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button  onClick={()=> history.push("/rider")} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
    )
}

export default BrowseHeroSection
