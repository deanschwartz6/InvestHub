import React from 'react';
import './content.css';

//Components Imports
import CurrentOfferings from './Components/Current-Offerings.jsx';
import JustLaunched from './Components/Just-Launched.jsx';
import MostFunded from './Components/Most-Funded.jsx';
import ClosingSoon from './Components/Closing-Soon.jsx';
import LaunchingSoon from './Components/Launching-Soon.jsx';

function Content(){
    return(
        <div className="content-area">
            <CurrentOfferings />
            <JustLaunched />
            <MostFunded />
            <ClosingSoon />
            <LaunchingSoon />
        </div>
    );
}

export default Content;