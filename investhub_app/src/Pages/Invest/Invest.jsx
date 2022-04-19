import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Home/Header/Header';
import SubNavHeader from '../../Components/InvestPage/SubNavHeader/SubNavHeader';
import WatchList from '../../Components/InvestPage/WatchlistTab/WatchList';
import Portfolio from '../../Components/InvestPage/PortfolioTab/Portfolio';
import Cash from '../../Components/InvestPage/CashTab/Cash';
import Banks from '../../Components/InvestPage/BanksTab/Banks';
import GetGive from '../../Components/InvestPage/GetGiveTab/GetGive';
import Settings from '../../Components/InvestPage/SettingsTab/Settings';

function Invest({ loggedIn, setLoggedIn, setCurrentTab }){
    const [activeTab, setActiveTab] = useState("1");
    const correctTab = () => {
        switch(activeTab) {
          case "1":   return <WatchList />;
          case "2":   return <Portfolio />;
          case "3": return <Cash />;
          case "4":  return <Banks />;
          case "5":  return <GetGive />;
          case "6":  return <Settings />;
          default:      return <h1>Contact Support Site Broken</h1>
        }
      }

    if(loggedIn){
        return(
            <ContentWrapper>
                <Header 
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    setCurrentTab={setCurrentTab} />
                <ContentArea>
                    <SubNavHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                    {correctTab(activeTab)}
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

const ContentWrapper = styled.div`
    background-color: #F0EFF3;
    min-height: 80em;
`;

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