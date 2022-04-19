import React, { useState } from 'react';
import styled from 'styled-components';
import InformationIcon from '../Assets/information-icon.png';
import OneIcon from '../Assets/one-icon.png';

function WatchListInvest(){
    const [investFormData, setInvestFormData] = useState({
        amount: "",
    });
    const investFormChange = (event) => {
        const changeObj = { ...investFormData };
        changeObj[event.target.id] = event.target.value;
        setInvestFormData(changeObj);
    }

    return(
        <ContentWrapper>
            <LeftSide>
                <InvestContent>
                    <LeftHeader><StyledSpan>INVEST IN</StyledSpan> Konzortia Capital Inc</LeftHeader>
                    <ClosingCard>
                        <StyledP>CLOSING IN 50 DAYS</StyledP>
                    </ClosingCard>
                    <InvestmentDiv>
                        <NumDiv>
                            <StyledOneIcon src={OneIcon} />
                        </NumDiv>
                        <Investment>
                            <InvestmentTag>Investment Amount</InvestmentTag>
                            <StyledInput id="amount" type="text" name="amount" onChange={investFormChange} value={investFormData.amount} required />
                            <ComputedText>819 shares @ $1.22100122/share</ComputedText>
                        </Investment>
                    </InvestmentDiv>
                </InvestContent>
            </LeftSide>
            <RightSide>
                <CardA>
                    <StyledCardHead>Summary</StyledCardHead>
                    <MidWrapper>
                        <CardLeft>
                            <StyledText>Intended Investment Amount</StyledText>
                            <StyledText>Actual Investment Amount</StyledText>
                            <SubText>Share Price</SubText>
                            <SubText>Number of Shares</SubText>
                            <FeesDiv>
                                <Text>Fees</Text>
                                <StyledIcon src={InformationIcon} />
                            </FeesDiv>
                        </CardLeft>
                        <CardRight>
                            <RightNums>$1,000</RightNums>
                            <RightNums>$999.12</RightNums>
                            <RightNums>$2.76</RightNums>
                            <RightNums>362</RightNums>
                            <RightNums>$34.97</RightNums>
                        </CardRight>
                    </MidWrapper>
                    <StyledHr />
                    <TotalDiv>
                        <Left>
                            <TotalText>Total</TotalText>
                        </Left>
                        <Right>
                            <TotalNum>$1,034.09</TotalNum>
                        </Right>
                    </TotalDiv>
                </CardA>
            </RightSide>
        </ContentWrapper>
    );
}

const ContentWrapper = styled.div`
    display: flex;
`;

const LeftSide = styled.div`
    width: 70%;
`;

const InvestContent = styled.div``;

const StyledOneIcon = styled.img``;

const LeftHeader = styled.h1`
    margin-left: 1.5em;
    margin-bottom: 1em;
    color: #737373;
`;

const StyledSpan = styled.span`
    color: #0E1C28;
    text-decoration: underline;
    text-decoration-color: #E0FF4F;
`;

const ClosingCard = styled.div`
    margin-left: 3em;
    background-color: #0E1C28;
    display: flex;
    width: fit-content;
    padding: 0em 4em;
`;

const StyledP = styled.p`
    color: #E0FF4F;
`;

const InvestmentDiv = styled.div`
    display: flex;
    margin-left: 3em;
    margin-top: 2em;
    gap: 2em;
`;

const NumDiv = styled.div``;

const Investment = styled.div``;

const InvestmentTag = styled.p``;

const StyledInput = styled.input``;

const ComputedText = styled.p``;

const RightSide = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardA = styled.div`
    background-color: #CCCCCC;
    width: 80%;
    margin-top: 3em;
    display: flex;
    flex-direction: column;
`;

const MidWrapper = styled.div`
    display: flex;
`;

const StyledCardHead = styled.div`
    align-self: center;
    margin-top: 1em;
    margin-bottom: .5em;
`;

const CardLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 1em;
`;

const StyledText = styled.p`
    margin-bottom: -.2em;
`;

const SubText = styled.p`
    margin-left: 1em;
    margin-bottom: -.3em;
`;

const FeesDiv = styled.div`
    margin-top: 1em;
`;

const Text = styled.text``;

const StyledIcon = styled.img`
    margin-left: .5em;
`;

const CardRight = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightNums = styled.p`
    text-align: right;
    margin-bottom: -.26em;
`;

const StyledHr = styled.hr`
    width: 90%;
    margin-top: 1em;
    margin-bottom: 0em;
`;

const TotalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0em 1em;
`;

const Left = styled.div``;

const Right = styled.div``;

const TotalText = styled.p``;

const TotalNum = styled.p``;

export default WatchListInvest;