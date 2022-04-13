import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Home/Header/Header';
import SubNavHeader from '../../Components/InvestPage/SubNavHeader/SubNavHeader';

function Invest({ loggedIn, setLoggedIn, setCurrentTab }){
    const [activeTab, setActiveTab] = useState("1");
    console.log(loggedIn)
    if(loggedIn){
        return(
            <ContentWrapper>
                <Header 
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    setCurrentTab={setCurrentTab} />
                <ContentArea>
                    <SubNavHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                </ContentArea>
            </ContentWrapper>
        );
    } else {
        return(
            <ContentWrapper>
                <Header 
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setCurrentTab={setCurrentTab} />
                <NotLoggedIn>
                    <StyledH1>Please Log In to View This Content</StyledH1>
                </NotLoggedIn>
            </ContentWrapper>
        );
    }
}

const ContentWrapper = styled.div``;

const ContentArea = styled.div``;

const NotLoggedIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 72em;
    background-color: #CCCCCC
`;

const StyledH1 = styled.h1`
    text-align: center;
    padding-top: 3em;
    font-size: 2.5rem;
`;

export default Invest;