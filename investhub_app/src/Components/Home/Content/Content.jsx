import React from 'react';
import styled from 'styled-components';

//Components Imports
import CurrentOfferings from './Components/Current-Offerings.jsx';
import JustLaunched from './Components/Just-Launched.jsx';
import MostFunded from './Components/Most-Funded.jsx';
import ClosingSoon from './Components/Closing-Soon.jsx';
import LaunchingSoon from './Components/Launching-Soon.jsx';

function Content(){
    return(
        <ContentAreaDiv>
            <CurrentOfferings />
            <JustLaunched />
            <MostFunded />
            <ClosingSoon />
            <LaunchingSoon />
        </ContentAreaDiv>
    );
}

const ContentAreaDiv = styled.div` background-color: #F0EFF3; `;

export default Content;