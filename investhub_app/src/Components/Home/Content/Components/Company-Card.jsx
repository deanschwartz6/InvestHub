import React from 'react';
import styled from 'styled-components';
import starImg from '../../../../Assets/card-star-button.svg';
import { Link } from 'react-router-dom';

function StarOnClickHelper(){
    console.log("Clicked Star");
}

function CompanyCard (props){

    return (
        <CardContentDiv>
            <TopCardDiv img={props.companyBackgroundImg}>
                {props.companyStatus === "Coming Soon" ? <StatusTagAlt >{props.companyStatus}</StatusTagAlt> : <StatusTag>{props.companyStatus}</StatusTag>}
                <TopRightStar src={starImg} />
            </TopCardDiv>
            <MiddleCardDiv>
                    <StyledLink to="/company" ><CompanyLogoImg src={props.companyLogo} /></StyledLink>
                    {props.companyInvestmentTag ? <CompanyInvestmentTag>{props.companyInvestmentTag}</CompanyInvestmentTag> : null}
                    <SecondTagDiv>
                        <CountryFlagImg src={props.companyCountryFlag} />
                        <CountryText>{props.companyCountryABV}</CountryText>
                    </SecondTagDiv>
            </MiddleCardDiv>
            <CompanyLink to="/company">
                <BottomCardTop>
                    <CompanyName>{props.companyName}</CompanyName>
                    <CompanyDescription>{props.companyDescription}</CompanyDescription>
                </BottomCardTop>
            </CompanyLink>
            <BottomCardBottom>
                <TagGroup>
                    <IndustryTag>{props.companyIndustryTag}</IndustryTag>
                    <TimeLeft>{props.timeLeft}</TimeLeft>
                </TagGroup>
                {props.companyInvestmentStatus ? <InvestmentStatus>{props.companyInvestmentStatus}</InvestmentStatus> : null}
            </BottomCardBottom>
        </CardContentDiv>
    );
}

const CardContentDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 31%;
    border: solid;
    border-width: .1em;
`;

const TopCardDiv = styled.div`
    background-image: url(${props => props.img});
    display: flex;
    padding-bottom: 7em;
    background-position: center;
    background-size: cover;
    margin: .2em;
    justify-content: space-between;
`;

const StatusTag = styled.h3`
    background-color: #F0EFF3;
    margin-left: 1em;
    padding: .3em;
    color: #FF6F4F;
    font-family: Vision Regular;
`;

const StatusTagAlt = styled.h3`
    background-color: #0E1C28;
    margin-left: 1em;
    padding: .3em;
    color: #FF6F4F;
    font-family: Vision Regular;
`;

const TopRightStar = styled.img.attrs({
    alt: "",
    onClick: StarOnClickHelper,
})`
    width: 12%;
    padding-right: 1em;
    &:hover{
        cursor: pointer;
    }
`;

const MiddleCardDiv = styled.div`
    display: flex;
    max-height: 16%;
    max-width: 80%;
    gap: .5em;
    align-items: center;
    margin-top: -2.5em;
    margin-bottom: -1em;
`;

const StyledLink = styled(Link)`
    width: 45%;
    margin-right: -12%;
    margin-bottom: 1em;
`;

const CompanyLogoImg = styled.img`
    max-width: 60%;
    max-height: 80%;
    padding-left: 1em;
    &:hover{
        cursor: pointer;
    }
`;

const CompanyInvestmentTag = styled.h5`
    display: flex;
    background-color: #CCCCCC;
    align-items: center;
    height: 30%;
    padding: 0em .5em;
    font-family: Noah Regular;
`;

const SecondTagDiv = styled.div`
    display: flex;
    background-color: #CCCCCC;
    gap: .3em;
    align-items: center;
    height: 30%;
`;

const CountryFlagImg = styled.img`
    max-width: 25%;
    padding-left: .5em;
`;

const CountryText = styled.h5`
    font-family: Noah Regular;
`;

const CompanyLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const BottomCardTop = styled.div`
    min-height: 12em;
    &:hover{
        cursor: pointer;
    }
`;

const CompanyName = styled.h3`
    padding-left: 1em;
    font-family: Noah Regular;
`;

const CompanyDescription = styled.p`
    padding-left: 1em;
    padding-right: .5em;
    color: #737373;
    font-family: Vision Light;
`;

const BottomCardBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -1.5em;
    margin-bottom: -1.5em;
`;

const TagGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IndustryTag = styled.h5`
    background-color: #CCCCCC;
    align-self: left;
    margin-left: 1.5em;
    padding: .5em 1em;
    width: fit-content;
    font-family: Noah Regular;
`;

const TimeLeft = styled.h5`
    color:#FF6F4F;
    padding-right: 1em;
    font-family: Vision Regular;
`;

const InvestmentStatus = styled.h5`
    padding-left: 1em;
    padding-bottom: .5em;
    margin-top: -1em;
    color: #737373;
    font-family: Vision Regular;
`;

export default CompanyCard;