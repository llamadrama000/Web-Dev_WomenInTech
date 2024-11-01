import React from 'react';
import './Styles/NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-leftside">
                <a href="/" className="logo">
                WIT.
                </a>
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                <li className="nav-item">
                    <a href="/about" className="nav-link">About</a>
                    <div className="dropdown">
                        <a href="/about/aboutUs">About Us</a>
                        <a href="/about/team">Meet Our Team!</a>
                    </div>
                </li>
                <li><a href="/events">Events</a></li>
                <li><a href="/join">Join Us</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
