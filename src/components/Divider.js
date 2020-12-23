import React, { Component } from 'react';
import HeroBanner2 from '../assets/img/hero-banner-2.jpg'

class SectionDivider extends Component {
    state = {  }
    render() { 
        return ( 
                <section className="bg-cover bg-center" style={{background: `url(${HeroBanner2})`}}>
                    <div class="primary-overlay py-5">
                        <div className="overlay-content">
                        <div className="container">
                            <div className="row align-items-center">
                            <div className="col-lg-7 text-center text-lg-left mb-4 mb-lg-0">
                                <h2 className="text-white mb-2">You Always Get the Best Guidance</h2>
                                <p className="text-white mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="col-lg-3 ml-auto text-center text-lg-right"><a className="btn btn-outline-light" href="#">Request a quote</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
         );
    }
}
 
export default SectionDivider;