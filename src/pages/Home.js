import React, { Component } from 'react';
import BenefitSection from '../components/BenefitsSection';
import SectionDivider from '../components/Divider';
import HeroSection from '../components/Hero';
import MainFeatures from '../components/MainFeatures';
import OurServices from '../components/Services';
import Testimonials from '../components/Testimonials';
import VideoSection from '../components/VideoSection';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <HeroSection />
                <MainFeatures />
                <OurServices />
                <SectionDivider />
                <BenefitSection />
                <VideoSection />
                <Testimonials />
            </>
         );
    }
}
 
export default Home;