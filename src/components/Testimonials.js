import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import personImage1 from '../assets/img/person-1.jpg'
import personImage2 from '../assets/img/person-2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

class Testimonials extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="py-5">
                <div className="container py-5">
                    <p className="h6 mb-1 text-uppercase text-primary mb-3">Our clients say</p>
                    <div className="row mb-5">
                    <div className="col-lg-5">
                        <h2 className="mb-5">The Best Solutions For Developing Your Business</h2>
                    </div>
                    <div className="col-lg-7">
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                    <OwlCarousel className="testimonials-slider owl-carousel owl-theme">
                        <div className="testimonial p-5 shadow-sm m-2">
                            <div className="d-flex align-items-center mb-4">
                            <div className="testimonial-img">
                                <img className="img-fluid rounded-circle" src={personImage1} alt=""></img>  
                            </div>
                            <div className="ml-3">
                                <h5 className="mb-0">Rodel Colez</h5>
                                <p className="small text-muted mb-1">Businessman</p>
                                <ul className="small list-inline text-primary mb-0">
                                        <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} />
                                        </li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                </ul>
                            </div>
                            </div>
                            <p className="text-muted text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </p>
                        </div>
                        <div className="testimonial p-5 shadow-sm m-2">
                            <div className="d-flex align-items-center mb-4">
                            <div className="testimonial-img">
                                    <img className="img-fluid rounded-circle" src={personImage2} alt=""></img>
                                        
                                </div>
                            <div className="ml-3">
                                <h5 className="mb-0">Mark Huff</h5>
                                <p className="small text-muted mb-1">Businessman</p>
                                <ul className="small list-inline text-primary mb-0">
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                </ul>
                            </div>
                            </div>
                            <p className="text-muted text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </p>
                        </div>
                        <div className="testimonial p-5 shadow-sm m-2">
                            <div className="d-flex align-items-center mb-4">
                            <div className="testimonial-img"><img className="img-fluid rounded-circle" src={personImage1} alt=""></img></div>
                            <div className="ml-3">
                                <h5 className="mb-0">Rodel Colez</h5>
                                <p className="small text-muted mb-1">Businessman</p>
                                <ul className="small list-inline text-primary mb-0">
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                <li className="list-inline-item m-0"><FontAwesomeIcon icon={faStar} /></li>
                                </ul>
                            </div>
                            </div>
                            <p className="text-muted text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </p>
                        </div>
                        <div className="testimonial p-5 shadow-sm m-2">
                            <div className="d-flex align-items-center mb-4">
                            <div className="testimonial-img"><img className="img-fluid rounded-circle" src={personImage2} alt=""></img></div>
                            <div className="ml-3">
                                <h5 className="mb-0">Mark Huff</h5>
                                <p className="small text-muted mb-1">Businessman</p>
                                <ul className="small list-inline text-primary mb-0">
                                <li className="list-inline-item m-0"><i className="fas fa-star"></i></li>
                                <li className="list-inline-item m-0"><i className="fas fa-star"></i></li>
                                <li className="list-inline-item m-0"><i className="fas fa-star"></i></li>
                                <li className="list-inline-item m-0"><i className="fas fa-star"></i></li>
                                <li className="list-inline-item m-0"><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                            </div>
                            <p className="text-muted text-small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </p>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
         );
    }
}
 
export default Testimonials;