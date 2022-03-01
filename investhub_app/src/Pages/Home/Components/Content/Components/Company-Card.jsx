import React from 'react';
import './company-card.css';
import starImg from '../../../../../Assets/card-star-button.svg';

//temp imports
import konzortia from '../../../../../Assets/konzortia-card-image.svg';
import konzortiaLogo from '../../../../../Assets/konzortia-card-logo.svg';
import unitedStatesFlag from '../../../../../Assets/US-flag-card.svg';

function CompanyCard (){
    return (
        <div className="card-content">
            <div style={{ backgroundImage:`url(${konzortia})` }} className="top-card" >
                <h3 className="status-tag" >Just Launched</h3>
                <img src={starImg} alt="" className="card-top-button" />
            </div>
            <div className="middle-card">
                <div className="middle-left">
                    <img src={konzortiaLogo} alt="" className="company-logo" />
                    <h5 className="investment-type-tag" >Equity</h5>
                    <span className="second-tag">
                        <img src={unitedStatesFlag} alt="" className="country-flag" />
                        <h5 className="country-text" >US</h5>
                    </span>
                </div>
                <div className="middle-right">
                    <h5 className="time-left" >50 days left</h5>
                </div>
            </div>
            <div className="bottom-card-first">
                <h3 className="company-name" >KONZORTIA CAPITAL INC</h3>
                <p className="company-description" >FinTech consortium that aims to redesign<br/>financial services on a global scale</p>
            </div>
            <div className="bottom-card-last">
                <h5 className="industry-tag">FinTech</h5>
                <h5 className="investment-status">Reg D via InvestHub, LLC</h5>
            </div>
        </div>
    );
}

export default CompanyCard;