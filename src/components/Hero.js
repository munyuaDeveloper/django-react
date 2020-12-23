import React, { Component } from 'react';
import heroBanner1 from '../assets/img/hero-banner-1.jpg';
import heroBanner2 from '../assets/img/hero-banner-2.jpg';
import heroBanner3 from '../assets/img/hero-banner-3.jpg';
import OwlCarousel from 'react-owl-carousel';  
class HeroSection extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <OwlCarousel className="owl-theme hero-slider owl-nav-custom"
                    loop
                    nav
                    items = {1}
                >
                    <div className="hero-slide bg-size bg-center py-5" style={{background: `url(${heroBanner1})`}}>
                        <div className="container text-white py-5 index-forward">
                            <div className="row">
                            <div className="col-lg-7">
                                <h1>Choose right solution for your business</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                <ul className="list-inline">
                                <li className="list-inline-item"><a className="btn btn-primary" href="#">Read More</a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light" href="#">Our company</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-slide bg-size bg-center py-5" style={{background: `url(${heroBanner2})`}}>
                        <div className="container text-white py-5 index-forward">
                            <div className="row">
                            <div className="col-lg-7">
                                <h1>We will help you to grow your business</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                <ul className="list-inline">
                                <li className="list-inline-item"><a className="btn btn-primary" href="#">Read More</a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light" href="#">Our company</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-slide bg-size bg-center py-5" style={{background: `url(${heroBanner3})`}}>
                        <div className="container text-white py-5 index-forward">
                            <div className="row">
                            <div className="col-lg-7">
                                <h1>You always get the best guidance</h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                <ul className="list-inline">
                                <li className="list-inline-item"><a className="btn btn-primary" href="#">Read More</a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light" href="#">Our company</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>

         );
    }
}
 
export default HeroSection;