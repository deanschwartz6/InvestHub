import React from 'react';
import styled from 'styled-components';

function LeftColumn(){
    return(
        <ContentWrapper>
            <h1>Left Column</h1>
        </ContentWrapper>
    );
}

const ContentWrapper = styled.div`
    background-color: blue;
    width: 75%;
`;

export default LeftColumn;