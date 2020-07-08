import React, { Component } from 'react';

class MobileNav extends Component {
    state = {  }
    render() { 
        return ( <div className="MobileNav">
            <ul className="list">
                <li className="item"> <a href="#home">Home</a></li>
                <li className="item"> <a href="#about">About</a></li>
                <li className="item"> <a href="#download">Download</a></li>
                <li className="item"> <a href="#testimonials">Testimonials</a></li>
                <li className="item"> <a href="#contact">Contact</a></li>
            </ul>
        </div> );
    }
}
 
export default MobileNav;