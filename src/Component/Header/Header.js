import React from 'react';
import './Header.css'
import logo from '../../Printing & Digital Shop Colorful Logo.png'

const Header = () => {
    return (
        <div className='header-style'>
            <div>
                <img width='250px' src={logo} alt="" />
            </div>
            <div>
                <nav className='main-manu'>
                    <a href="/home">Home</a>
                    <a href="./details">Details</a>
                    <a href="./contact">Contact Us</a>
                </nav>
            </div>

        </div>

    );
};

export default Header;