import React from 'react';
import './launching-soon.css';
import CompanyCard from './Company-Card.jsx';

//Assets Imports
import horseGuardBackground from '../../../../../Assets/horse-guard-image.svg';
import unitedKingdomFlag from '../../../../../Assets/UK-flag-card.svg';
import horseGuardLogo from '../../../../../Assets/horse-guard-logo.svg';
import valkyrieBackground from '../../../../../Assets/valkyrie-industries-image.svg';
import valkyrieLogo from '../../../../../Assets/valkyrie-industries-logo.svg'
import nakedBackground from '../../../../../Assets/naked-collective-image.svg';
import irelandFlag from '../../../../../Assets/ireland-flag-card.svg';
import nakedCollectiveLogo from '../../../../../Assets/naked-collective-logo.svg';

function MostFunded(){
    return(
        <div className="launching-soon-content">
            <div className="content-top">
                <h3>LAUNCHING SOON</h3>
                <div className="arrow-buttons">
                    <button>left</button>
                    <button>right</button>
                </div>
            </div>
            <hr className="launching-soon-hr" />
            <div className="cards-area">
                <CompanyCard 
                    companyBackgroundImg={horseGuardBackground}
                    companyStatus="Coming Soon"
                    companyLogo={horseGuardLogo}
                    companyInvestmentTag="EIS"
                    companyCountryFlag={unitedKingdomFlag}
                    companyCountryABV="UK"
                    timeLeft="10 Days Left"
                    companyName="HORSE GUARDS GIN"
                    companyDescription="Horse Guards revives heritage spirit brands, re-introducing them to modern consumers. We currently own 8 heritage trademarks including our latest brands, Pink Gin & Wing Walker Rum. We aim to launch Craigsman Whisky & Black River Mezcal in 2021 with the funds raised."
                    companyIndustryTag="Food & Beverage"
                    companyInvestmentStatus="Reg CF via InvestHub, LLC"
                />
                <CompanyCard 
                    companyBackgroundImg={valkyrieBackground}
                    companyStatus="Coming Soon"
                    companyLogo={valkyrieLogo}
                    companyInvestmentTag="EIS"
                    companyCountryFlag={unitedKingdomFlag}
                    companyCountryABV="UK"
                    timeLeft="18 Days Left"
                    companyName="VALKYRIE INDUSTRIES"
                    companyDescription="Valkyrie Industries is the maker of the wearable haptic suit (BiFrost) to let users feel, touch and hold objects naturally in virtual simulations. With the primary application in the space robotics market (estimated $4.36bn in 2023), BiFrost has been piloted successfully with a UK space agency."
                    companyIndustryTag="Technology"
                    companyInvestmentStatus=""
                />
                <CompanyCard 
                    companyBackgroundImg={nakedBackground}
                    companyStatus="Coming Soon"
                    companyLogo={nakedCollectiveLogo}
                    companyInvestmentTag="Convert"
                    companyCountryFlag={irelandFlag}
                    companyCountryABV="IR"
                    timeLeft="9 Days Left"
                    companyName="THE NAKED COLLECTIVE"
                    companyDescription="The Naked Collective is a carbon neutral wellness company powered by people, plants and purpose. We're on a mission to provide health conscious consumers with vitamin packed, healthy drinks via our two brands Mude & So.Beer. €5.9m already funded & PE backed. Join the Collective."
                    companyIndustryTag="Food & Beverage"
                    companyInvestmentStatus="Reg D via InvestHub, LLC"
                />
            </div>
        </div>
    );
}

export default MostFunded;