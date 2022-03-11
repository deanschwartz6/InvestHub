import React from 'react';
import styled from 'styled-components';

function CurrentOfferings(){
    return (
        <CurrentOfferingsDiv>
            <StyledH3>OUR CURRENT OFFERINGS</StyledH3>
            <CurrentOfferingsHr />
            <DropDownSelections>

                <StyledSelect region name="region" >
                    <StyledOption value="" disabled selected hidden >Region</StyledOption>
                    <StyledOption value="united_states">United States</StyledOption>
                </StyledSelect>

                <StyledSelect industry name="industry" >
                    <StyledOption value="" disabled selected hidden >Industry</StyledOption>
                    <StyledOption value="fintech">FinTech</StyledOption>
                </StyledSelect>

                <SdgGroupDiv>
                    <StyledH4>SDG - <StyledSpan>Impact Investment</StyledSpan></StyledH4>
                    <StyledSelect sdg name="sdg-impact" >        
                        <StyledOption value="" disabled selected hidden >Sustainable Development Goal</StyledOption>
                        <StyledOption value="sdg-placeholder">Testing placeholder</StyledOption>
                    </StyledSelect>
                </SdgGroupDiv>

                <StyledSelect filter name="filter" >
                    <StyledOption value="" disabled selected hidden>Filter By</StyledOption>
                    <StyledOption value="just-launched">Just Launched</StyledOption>
                </StyledSelect>

                <StyledSelect mostFunded name="most-funded" >
                    <StyledOption value="" disabled selected hidden>Most Funded</StyledOption>
                    <StyledOption value="konzortia_capital">Konzortia Capital</StyledOption>
                </StyledSelect>

            </DropDownSelections>
            <DropDownTagsDiv>
                <ClearButton>X Clear All</ClearButton>
            </DropDownTagsDiv>
        </CurrentOfferingsDiv>
    );
}

const CurrentOfferingsDiv = styled.div``;

const StyledH3 = styled.h3`
    padding-left: 1em;
    color: #737373;
`;

const CurrentOfferingsHr = styled.hr`
    margin-top: -.7em;
    margin-left: 1em;
    margin-right: 1em;
    color: #FF6F4F;
`;

const DropDownSelections = styled.div`
    display: flex;
    justify-content: right;
    padding-right: 1em;
    padding-top: .2em;
    padding-bottom: 1em;
    gap: .2em;
`;

const StyledSelect = styled.select`
    max-width: ${props => props.sdg ? '17em' : '8em' };
    min-width: ${props => props.sdg ? '16em' : '7em'};
    background: transparent;
    border: solid;
    border-color: #F0EFF3;
    border-left: solid;
    border-right: solid;
    border-bottom: solid;
`;

const StyledOption = styled.option``;

const SdgGroupDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledH4 = styled.h4`
    font-size: .65em;
    margin-top: -1em;
    margin-bottom: .15em;
`;

const StyledSpan = styled.span`
    background-color: #1C122D;
    color: #CAF23D;
    padding: .1em;
`;

const DropDownTagsDiv = styled.div`
    display: flex;
    justify-content: right;
`;

const ClearButton = styled.button`
    margin-right: 1em;
    background: transparent;
    border: solid;
    border-color: #F0EFF3;
`;


export default CurrentOfferings;