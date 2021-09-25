import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">

            <img className="logo" src={logo} alt="" />
            <nav >


                <a href="http://" >Shop</a>
                <a href="http://" >Order Review</a>
                <a href="http://" >Manage Inventory here</a>


                <div>
                    <input className="search-box" type="text" placeholder="type here to search" />
                </div>
            </nav>

        </div>
    );
};

export default Header;