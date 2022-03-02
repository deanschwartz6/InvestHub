import React from 'react';
import './just-launched.css';

//Components Imports
import CompanyCard from './Company-Card.jsx';

//Company Card Imports
import konzortiaBackground from '../../../../../Assets/konzortia-card-image.svg';
import konzortiaLogo from '../../../../../Assets/konzortia-card-logo.svg';
import unitedStatesFlag from '../../../../../Assets/US-flag-card.svg';

//Assets Imports
import darkArrowLeft from '../../../../../Assets/dark-arrow-left.svg';
import lightArrowRight from '../../../../../Assets/light-arrow-right.svg';

function JustLaunched(){
    return (
        <div className="just-launched-content">
            <div className="content-top">
                <h3>JUST LAUNCHED</h3>
                <div className="arrow-buttons">
                    <img src={darkArrowLeft} alt="" className="left-arrow-btn" />
                    <img src={lightArrowRight} alt="" className="right-arrow-btn" />
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