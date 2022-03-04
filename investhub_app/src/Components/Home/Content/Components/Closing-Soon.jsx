import React from 'react';
import CompanyCard from './Company-Card.jsx';

//Assets Imports
import fishyFilamentsBackground from '../../../../Assets/fishy-filaments-image.svg';
import unitedKingdomFlag from '../../../../Assets/UK-flag-card.svg';
import fishyFilamentsLogo from '../../../../Assets/fishy-filaments-logo.svg';
import fivePointsBackground from '../../../../Assets/five-points-image.svg';
import fivePointsLogo from '../../../../Assets/five-points-logo.svg';
import inspiraPharmaBackground from '../../../../Assets/inspira-pharma-image.svg';
import inspiraPharmaLogo from '../../../../Assets/inspira-pharma-logo.svg';
import darkArrowLeft from '../../../../Assets/dark-arrow-left.svg';
import lightArrowRight from '../../../../Assets/light-arrow-right.svg';

function MostFunded(){
    return(
        <div className="closing-soon-content">
            <div className="content-top">
                <h3>CLOSING SOON</h3>
                <div className="arrow-buttons">
                    <img src={darkArrowLeft} alt="" className="left-arrow-btn" />
                    <img src={lightArrowRight} alt="" className="right-arrow-btn" />
                </div>
            </div>
            <hr className="closing-soon-hr" />
            <div className="cards-area">
                <CompanyCard 
                    companyBackgroundImg={fishyFilamentsBackground}
                    companyStatus="Closing Soon"
                    companyLogo={fishyFilamentsLogo}
                    companyInvestmentTag="EIS"
                    companyCountryFlag={unitedKingdomFlag}
                    companyCountryABV="UK"
                    timeLeft="23 Days Left"
                    companyName="FISHY FILAMENTS"
                    companyDescription="Fishy Filaments has developed a fishing net recycling process that enables immediate use of net materials in 3D printing and injection moulding. In a global cleantech market there is growing interest in new solutions that help protect our shared oceans and coastal communities."
                    companyIndustryTag="Recycling"
                    companyInvestmentStatus="Reg CF via InvestHub, LLC"
                />
                <CompanyCard 
                    companyBackgroundImg={fivePointsBackground}
                    companyStatus="Closing Soon"
                    companyLogo={fivePointsLogo}
                    companyInvestmentTag="EIS"
                    companyCountryFlag={unitedKingdomFlag}
                    companyCountryABV="UK"
                    timeLeft="23 Days Left"
                    companyName="FIVE POINTS BREWING"
                    companyDescription="The Five Points is one of London's best known craft breweries. Based in Hackney, East London, their award-winning beers are stocked nationwide in pubs and in Waitrose, Tesco and Nando's. They are funding to open a new showcase brewery and taproom in the heart of Hackney."
                    companyIndustryTag="Social"
                    companyInvestmentStatus="Reg CF via InvestHub, LLC"
                />
                <CompanyCard 
                    companyBackgroundImg={inspiraPharmaBackground}
                    companyStatus="Closing Soon"
                    companyLogo={inspiraPharmaLogo}
                    companyCountryFlag={unitedKingdomFlag}
                    companyInvestmentTag=""
                    companyCountryABV="UK"
                    timeLeft="19 Days Left"
                    companyName="INSPIRA PHARMACEUTICALS"
                    companyDescription="Inspira Pharma is developing a potential new therapy for COVID-19. The active molecules being tested are plant-based and have shown an ability to destroy the SARS-CoV-2 virus in the lab. Funds raised will be used to test clinical formulations and prove safety and efficacy in humans."
                    companyIndustryTag="Pharmaceuticals"
                    companyInvestmentStatus="Reg CF via InvestHub, LLC"
                />
            </div>
        </div>
    );
}

export default MostFunded;