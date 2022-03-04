import React from 'react';
import './company-card.css';
import starImg from '../../../../Assets/card-star-button.svg';


function CompanyCard (props){
    return (
        <div className="card-content">
            <div style={{ backgroundImage:`url(${props.companyBackgroundImg})` }} className="top-card" >
                {props.companyStatus === "Coming Soon" ? <h3 className="status-tag-alt" >{props.companyStatus}</h3> : <h3 className="status-tag" >{props.companyStatus}</h3>}
                <img src={starImg} alt="" className="card-top-button" />
            </div>
            <div className="middle-card">
                <div className="middle-left">
                    <img src={props.companyLogo} alt="" className="company-logo" />
                    {props.companyInvestmentTag ? <h5 className="investment-type-tag" >{props.companyInvestmentTag}</h5> : null}
                    <div className="second-tag">
                        <img src={props.companyCountryFlag} alt="" className="country-flag" />
                        <h5 className="country-text" >{props.companyCountryABV}</h5>
                    </div>
                </div>
                <div className="middle-right">
                    <h5 className="time-left" >{props.timeLeft}</h5>
                </div>
            </div>
            <div className="bottom-card-first">
                <h3 className="company-name" >{props.companyName}</h3>
                <p className="company-description" >{props.companyDescription}</p>
            </div>
            <div className="bottom-card-last">
                <h5 className="industry-tag">{props.companyIndustryTag}</h5>
                {props.companyInvestmentStatus ? <h5 className="investment-status">{props.companyInvestmentStatus}</h5> : null}
            </div>
        </div>
    );
}

export default CompanyCard;