import React from 'react';
import './just-launched.css';

//Components Imports
import CompanyCard from './Company-Card.jsx';

//Company Card Imports
import konzortiaBackground from '../../../../../Assets/konzortia-card-image.svg';
import konzortiaLogo from '../../../../../Assets/konzortia-card-logo.svg';
import unitedStatesFlag from '../../../../../Assets/US-flag-card.svg';

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
                <CompanyCard 
                    companyBackgroundImg={konzortiaBackground}
                    companyStatus="Just Launched"
                    companyLogo={konzortiaLogo}
                    companyInvestmentTag="Equtiy"
                    companyCountryFlag={unitedStatesFlag}
                    companyCountryABV="US"
                    timeLeft="50 days left"
                    companyName="KONZORTIA CAPITAL INC"
                    companyDescription="FinTech consortium that aims to redesign financial services on a global scale"
                    companyIndustryTag="FinTech"
                    companyInvestmentStatus="Reg D via InvestHub, LLC"
                />
            </div>
        </div>
    );
}

export default JustLaunched;