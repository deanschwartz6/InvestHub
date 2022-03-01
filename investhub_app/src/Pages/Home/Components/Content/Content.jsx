import React from 'react';
import './content.css';

//Components Imports
import CurrentOfferings from './Components/Current-Offerings.jsx';
import JustLaunched from './Components/Just-Launched.jsx';

function Content(){
    return(
        <div className="content-area">
            <CurrentOfferings />
            <JustLaunched />
        </div>
    );
}

export default Content;