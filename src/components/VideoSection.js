import React, { Component } from 'react';
import HeroBanner3 from '../assets/img/hero-banner-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
class VideoSection extends Component {
    state = {  }
    render() { 
        return ( 
            <section class="bg-center bg-cover" style={{background: `url(${HeroBanner3})`}}>
                <div class="dark-overlay py-5">
                    <div class="overlay-content text-white">
                    <div class="container py-5">
                        <header class="text-center">
                        <div class="row">
                            <div class="col-lg-9 mx-auto">
                            <button class="video-btn mb-5" type="button" data-video-id="pwGiwY4UWjM"><FontAwesomeIcon icon={faPlay} /></button>
                            <p class="h6 mb-1 text-uppercase text-primary mb-3">We make a difference</p>
                            <h2 class="h1 mb-5">The Best Solutions For Developing Your Business</h2><a class="btn btn-primary" href="#">View more services</a>
                            </div>
                        </div>
                        </header>
                    </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default VideoSection;