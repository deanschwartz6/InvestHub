//React Imports
import React from 'react';

//Style Imports
import './main.css';

//Components Imports
import Header from './Components/Header/Header.jsx';
import Banner from './Components/Banner/Banner.jsx';

//Assets Imports


//Main function
function Main(){
    return (
        <div className="main-content">
            <Header />
            <Banner />
        </div>
    );
}

export default Main;