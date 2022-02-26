import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../../../Assets/logo.svg';

function Header(){
    return(
        <header className="header">
            <img src={logo} alt="" id="image-logo" />
            <div className="middle-content">
                <button className="left-nav-element" >Start Investing</button>
                <input type="search" className="left-nav-element" />
                <h4 className="left-nav-element" >INVESTHUBCONNECTS</h4>
            </div>
            <div className="right-nav">
                <Link to="/raise-capital" className="right-nav-element" >Raise Capital</Link>
                <button className="right-nav-element" >Login</button>
                <button className="right-nav-element" >Sign Up</button>
            </div>
        </header>
    );
}

export default Header;