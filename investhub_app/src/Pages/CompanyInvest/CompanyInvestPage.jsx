import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Home/Header/Header';
import LeftColumn from '../../Components/CompanyInvest/LeftColumn/LeftColumn';
import RightColumn from '../../Components/CompanyInvest/RightColumn/RightColumn';

function CompanyInvestPage(){
    return(
        <ContentWrapper>
            <Header />
            <MainContent>
                <LeftColumn />
                <RightColumn />
            </MainContent>
        </ContentWrapper>
    );
}

const ContentWrapper = styled.div``;

const MainContent = styled.div`
    display: flex;
`;

export default CompanyInvestPage;