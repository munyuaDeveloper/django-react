import React, { Component } from 'react'

import about from '../assets/img/about-img.jpg'
class MainFeatures extends Component {
    state = {  }
    render() { 
        return ( 
               <section className="py-5 bg-light">
                    <div className="container py-5">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <p className="h6 mb-1 text-uppercase text-primary mb-3">Our main features</p>
                            <h2 className="mb-4">We Work With You To Address Your Most Critical Business Priorities</h2>
                            <p className="text-small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <ul className="list-check list-unstyled row px-3 mb-4">
                                <li className="text-small text-muted col-lg-6 mb-2">Acquire live chat enables sales</li>
                                <li className="text-small text-muted col-lg-6 mb-2">Learn from customer feedback</li>
                                <li className="text-small text-muted col-lg-6 mb-2">Engage - marketing automation</li>
                                <li className="text-small text-muted col-lg-6 mb-2">Support -customer support</li>
                                <li className="text-small text-muted col-lg-6 mb-2">Acquire live chat enables sales</li>
                                <li className="text-small text-muted col-lg-6 mb-2">Learn from customer feedback</li>
                            </ul>
                            <ul className="list-inline py-4 border-top border-bottom d-flex align-items-center">
                                <li className="list-inline-item pr-4 mr-0">
                                    <img src="img/about-sign.png" alt="" width="80"></img>

                                    </li>
                            <li className="list-inline-item px-4 mr-0 border-left">
                                <h5 className="mb-0">Jack Foxx</h5>
                                <p className="small font-weight-normal text-muted mb-0">Chairnan and founder </p>
                            </li>
                            <li className="list-inline-item pl-4 border-left">
                                <h5 className="mb-0">+420 754 6545 6564</h5>
                                <p className="small font-weight-normal text-muted mb-0">Call to ask any question</p>
                            </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 ml-auto mb-4 mb-lg-0 order-1 order-lg-2">
                            <div className="p-2 border">
                                <img className="img-fluid" src={about} alt=""></img>

                                </div>
                        </div>
                        </div>
                    </div>
                    </section>

         );
    }
}
 
export default MainFeatures;
