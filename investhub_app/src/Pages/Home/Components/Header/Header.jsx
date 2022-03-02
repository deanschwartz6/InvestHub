import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../../../Assets/logo.svg';

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="" id="image-logo" />
            <div className="middle-content">
                <button className="left-nav-element start-investing" >Start Investing</button>
                <input type="search" className="left-nav-element search-bar" placeholder="Search" />
                <h4 className="left-nav-element" >INVESTHUBCONNECTS</h4>
            </div>
            <div className="right-nav">
                <NavLink to="/raise-capital" className="right-nav-element raise-capital" >Raise Capital</NavLink>
                <button className="right-nav-element login" >Login</button>
                <button className="right-nav-element sign-up" >Sign Up</button>
            </div>
        </header>
    );
}


export default Header;