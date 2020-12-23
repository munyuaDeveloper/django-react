import React, { Component } from 'react'

import logo from '../assets/img/logo.svg'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <header className="header">
                    <div className="top-bar bg-dark text-white">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-4 bg-primary py-2 text-center text-lg-left">
                                <p className="mb-0 text-small"><i className="fas fa-clock mr-2"></i>
                                    Opening hours: Mon - Sat 9:00 - 18:00
                                </p>
                            </div>
                            <div className="col-lg-8 text-right py-2 text-center text-lg-right">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a className="font-weight-normal text-small reset-anchor" href="#"><i className="fas fa-mobile mr-2"></i>+535 421 895 6523</a></li>
                                <li className="list-inline-item">|</li>
                                <li className="list-inline-item"><a className="font-weight-normal text-small reset-anchor" href="#"><i className="fas fa-envelope mr-2"></i>Construction@example.com</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light py-3 bg-white shadow-sm">
                        <div className="container">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} alt="" width="200"></img>
                            </a>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                <li className="nav-item mx-2 active"><a className="nav-link text-uppercase" href="index.html">Home </a></li>
                                <li className="nav-item mx-2"><a className="nav-link text-uppercase" href="about.html">About</a></li>
                                <li className="nav-item mx-2"><a className="nav-link text-uppercase" href="contact.html">Contact</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
         );
    }
}
 
export default NavBar;
