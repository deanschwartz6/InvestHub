import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CompanyCard from '../../Home/Content/Components/Company-Card';
import { Star } from 'react-bootstrap-icons';

//Company Card Imports
import konzortiaBackground from '../../../Assets/konzortia-card-image.svg';
import konzortiaLogo from '../../../Assets/konzortia-card-logo.svg';
import unitedStatesFlag from '../../../Assets/US-flag-card.svg';

function WatchList(){
    const trigger = true;
    const navigate = useNavigate();
    const discoverClick = () => navigate("/");

    if(trigger){
        return(
            <ContentWrapper>
                <CardsArea>
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
                            page="watchlist"
                    />
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
                        page="watchlist"
                    />
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
                        page="watchlist"
                    />
                </CardsArea>
            </ContentWrapper>
        );
    } else {
        return (
            <Wrapper>
                <StyledP>Seems a bit empty <Star/> some companies and they will appear here.</StyledP>
                <DiscoverButton onClick={discoverClick}>DISCOVER COMPANIES</DiscoverButton>
            </Wrapper>
        );
    }
}

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 3em;
`;

const CardsArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    gap: 1em;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
`;

const StyledP = styled.p`
    font-family: Vision Light Italic;
    font-size: 1.1rem;
`;

const DiscoverButton = styled.button`
    background-color: #0E1C28;
    color: #E0FF4F;
    font-family: Noah Bold;
    font-size: .9rem;
    margin-top: 1em;
    padding: 1.2em 3em;
    cursor: pointer;
`;

export default WatchList;