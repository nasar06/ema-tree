import React from 'react';
import './Header.css'
import img from '../../img/Logo.svg'

const Header = () => {
    return (
        <nav className='header-area'>
            <img src={img}></img>
            <div className='nav-menu'>
                <a href='/shop'>Shop</a>
                <a href='/product'>Product</a>
                <a href='/about'>About</a>
                <a href='/service'>Service</a>
            </div>
        </nav>
    );
};

export default Header;