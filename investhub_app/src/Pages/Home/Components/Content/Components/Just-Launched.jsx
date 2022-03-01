import React from 'react';
import './just-launched.css';

//Components Imports
import CompanyCard from './Company-Card.jsx';

function JustLaunched(){
    return (
        <div className="just-launched-content">
            <div className="content-top">
                <h3>JUST LAUNCHED</h3>
                <div className="arrow-buttons">
                    <button>left</button>
                    <button>right</button>
                </div>
            </div>
            <hr className="just-launched-hr" />
            <div className="cards-area">
                <CompanyCard className="left-card" />
                <CompanyCard />
                <CompanyCard className="right-card" />
            </div>
        </div>
    );
}

export default JustLaunched;