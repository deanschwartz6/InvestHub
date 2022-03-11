import React from 'react';
import { ContentContainerDiv, ContentTopDiv, TitleH3, ArrowButtonsDiv, ImgButton, StyledHr, CardsAreaDiv } from './CardsArea.Styled';

//Components Imports
import CompanyCard from './Company-Card.jsx';

//Company Card Imports
import konzortiaBackground from '../../../../Assets/konzortia-card-image.svg';
import konzortiaLogo from '../../../../Assets/konzortia-card-logo.svg';
import unitedStatesFlag from '../../../../Assets/US-flag-card.svg';

//Assets Imports
import darkArrowLeft from '../../../../Assets/dark-arrow-left.svg';
import lightArrowRight from '../../../../Assets/light-arrow-right.svg';

function JustLaunched(){
    return (
        <ContentContainerDiv>
            <ContentTopDiv>
                <TitleH3>JUST LAUNCHED</TitleH3>
                <ArrowButtonsDiv>
                    <ImgButton src={darkArrowLeft} alt="" />
                    <ImgButton src={lightArrowRight} alt="" />
                </ArrowButtonsDiv>
            </ContentTopDiv>
            <StyledHr />
            <CardsAreaDiv>
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
            </CardsAreaDiv>
        </ContentContainerDiv>
    );
}

export default JustLaunched;