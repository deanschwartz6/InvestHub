import React from 'react';
import { ContentContainerDiv, ContentTopDiv, TitleH3, ArrowButtonsDiv, ImgButton, StyledHr, CardsAreaDiv } from './CardsArea.Styled';
import CompanyCard from './Company-Card.jsx';

//Assets Imports
import nakedBackground from '../../../../Assets/naked-collective-image.svg';
import irelandFlag from '../../../../Assets/ireland-flag-card.svg';
import nakedCollectiveLogo from '../../../../Assets/naked-collective-logo.svg';
import darkArrowLeft from '../../../../Assets/dark-arrow-left.svg';
import lightArrowRight from '../../../../Assets/light-arrow-right.svg';

function MostFunded(){
    return(
        <ContentContainerDiv>
            <ContentTopDiv>
                <TitleH3>MOST FUNDED</TitleH3>
                <ArrowButtonsDiv>
                    <ImgButton src={darkArrowLeft} alt="" />
                    <ImgButton src={lightArrowRight} alt="" />
                </ArrowButtonsDiv>
            </ContentTopDiv>
            <StyledHr />
            <CardsAreaDiv>
                <CompanyCard 
                    companyBackgroundImg={nakedBackground}
                    companyStatus="Most Funded"
                    companyLogo={nakedCollectiveLogo}
                    companyInvestmentTag="Convertable"
                    companyCountryFlag={irelandFlag}
                    companyCountryABV="IR"
                    timeLeft="9 Days Left"
                    companyName="THE NAKED COLLECTIVE"
                    companyDescription="The Naked Collective is a carbon neutral wellness company powered by people, plants and purpose. We're on a mission to provide health conscious consumers with vitamin packed, healthy drinks via our two brands Mude & So.Beer. €5.9m already funded & PE backed. Join the Collective."
                    companyIndustryTag="Food & Beverage"
                    companyInvestmentStatus="Reg D via InvestHub, LLC"
                />
            </CardsAreaDiv>
        </ContentContainerDiv>
    );
}

export default MostFunded;