import React from 'react';
import './Styles/NavBar.css';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="navbar-leftside">
                <a href="/" className="logo">
                <img 
                    src="src/assets/Logo/Women_In_Tech_Logo.png"
                    className="wit-logo"
                />
                <span className="pink-dot">.</span>
                </a>
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                    <li><a href="/home" className="nav-link">Home</a></li>
                    <li className="nav-item">
                        <div className="dropdown">
                            <button className='dropbutton'>
                                About
                                <i className='caret-down'></i>
                            </button>
                            <div className='dropdown-content'>
                                <a href="/about/aboutUs">About Us</a>
                                <a href="/about/team">Meet Our Team!</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="/events" className="nav-link">Events</a></li>
                    <li><a href="/join" className="nav-link">Join Us</a></li>
                    <li><a href="/contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
