import React from 'react';
import './content.css';

//Components Imports
import CurrentOfferings from './Components/Current-Offerings.jsx';

function Content(){
    return(
        <div className="content-area">
            <CurrentOfferings />
        </div>
    );
}

export default Content;