import React, { Component } from 'react';
import featureImage from '../assets/img/feature-img.jpg'
class BenefitSection extends Component {
    state = {  }
    render() { 
        return ( 
            <section class="py-5 bg-light">
                <div class="container py-5">
                    <div class="row align-items-center">
                    <div class="col-lg-5 px-lg-0">
                            <div class="bg-primary pr-lg-3">
                                <img class="img-fluid w-100" src={featureImage} alt=""></img>

                                </div>
                    </div>
                    <div class="col-lg-7 px-lg-0">
                        <div class="p-4 p-md-5 shadow bg-white">
                        <p class="h6 mb-1 text-uppercase text-primary mb-3">Why choose us</p>
                        <h2 class="mb-5">We Provide Experts To Create A Great Value For Your Business</h2>
                        <div class="row">
                            <div class="col-lg-9">
                            <ol class="list-numbers mb-0">
                                <li class="mb-4">
                                <h5>We modify whole system</h5>
                                <p class="text-small text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. </p>
                                </li>
                                <li class="mb-4">
                                <h5>Safeguard for Your Business</h5>
                                <p class="text-small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                </li>
                                <li class="mb-4">
                                <h5>Beneficial Strategies</h5>
                                <p class="text-small text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. </p>
                                </li>
                                <li>
                                <h5>Build Solid Human Resource</h5>
                                <p class="text-small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                </li>
                            </ol>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default BenefitSection;