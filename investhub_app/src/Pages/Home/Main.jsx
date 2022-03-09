//React Imports
import React from 'react';
import styled from 'styled-components';

//Components Imports
import Header from '../../Components/Home/Header/Header.jsx';
import Banner from '../../Components/Home/Banner/Banner.jsx';
import Information from '../../Components/Home/Information/Information.jsx';
import Content from '../../Components/Home/Content/Content.jsx';

//Main function
function Main(){
    return (
        <MainContent>
            <Header />
            <Banner />
            <Information />
            <Content />
        </MainContent>
    );
}

const MainContent = styled.div`
    display: grid;
`

export default Main;