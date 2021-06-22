import React from 'react';
import Icon1 from '../../images/svg-2.svg';
import Icon2 from '../../images/svg-1.svg';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, ServicesCard } from './ServicesElement';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Driver</ServicesH2>
                <ServicesP>We help reduce your petrol and servicing cost of the vehicle.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Rider</ServicesH2>
                <ServicesP>We help reduce your transportation cost.</ServicesP>
            </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services