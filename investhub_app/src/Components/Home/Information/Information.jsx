import React from 'react';
import styled from 'styled-components';

function Information(){
    return (
        <InformationContent>
            <TopText>
                <TopTextElements>AMOUNT RAISED<br/><BottomTextElements><StyledH2>$400M+</StyledH2></BottomTextElements></TopTextElements>
                <TopTextElements>PROSPECTIVE INVESTORS<br/><BottomTextElements><StyledH2>510K</StyledH2></BottomTextElements></TopTextElements>
                <TopTextElements>CURRENT OPPROTUNITIES<br/>
                    <CoOpprotunities>
                        <StyledH3><StyledSpan>30</StyledSpan><br/>Live</StyledH3>
                        <StyledH5>More Coming Soon!<br/><SecondSpan>Secondary Market</SecondSpan></StyledH5>
                    </CoOpprotunities>
                </TopTextElements>
                <TopTextElements>COMMUNITY POPULATION<br/><BottomTextElements><StyledH2>$400M</StyledH2></BottomTextElements></TopTextElements>
            </TopText>
        </InformationContent>
    );
}

const InformationContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #CCCCCC;
    height: 7.5em;
`;

const TopText = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const TopTextElements = styled.h4`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #737373;
    font-family: Noah Regular;
`;

const BottomTextElements = styled.span`
    display: flex;
    align-items: center;
    color: black;
    font-family: Vision Regular;
`;

const CoOpprotunities = styled.span`
    padding-top: 0;
    display: flex;
    gap: 2em;
    color: black;
    font-family: Vision Regular;
`;

const StyledH2 = styled.h2``;

const StyledH3 = styled.h3``;

const StyledH5 = styled.h5``;

const StyledSpan = styled.span`
    font-size: 1.2rem;
`;

const SecondSpan = styled.span`
    color: #FF6F4F;
`;

export default Information;