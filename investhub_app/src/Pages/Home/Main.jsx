//React Imports
import React from 'react';

//Style Imports
import './main.css';

//Components Imports
import Header from '../../Components/Home/Header/Header.jsx';
import Banner from '../../Components/Home/Banner/Banner.jsx';
import Information from '../../Components/Home/Information/Information.jsx';
import Content from '../../Components/Home/Content/Content.jsx';

//Main function
function Main(){
    return (
        <div className="main-content">
            <Header />
            <Banner />
            <Information />
            <Content />
        </div>
    );
}

export default Main;