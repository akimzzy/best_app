import React, { Component } from 'react';

class Nav extends Component {
    state = {  }
    render() { 
        return (<nav className="navigation">
            <img src="../Assets/logo.svg" alt="logo" className="logo"/>
            <ul className="list">
                <li className="item"> <a href="#home">Home</a></li>
                <li className="item"> <a href="#about">About</a></li>
                <li className="item"> <a href="#download">Download</a></li>
                <li className="item"> <a href="#testimonials">Testimonials</a></li>
                <li className="item"> <a href="#contact">Contact</a></li>
            </ul>

            <div className="hamburger">
                <div id="nav-icon">
                
                </div>
            </div>
        </nav>);
    }
}
 
export default Nav;