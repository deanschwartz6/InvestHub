import React from 'react';
import styled from 'styled-components';

function RightColumn(){
    return(
        <ContentWrapper>
            <h1>Right Column</h1>
        </ContentWrapper>
    );
}

const ContentWrapper = styled.div`
    background-color: grey;
    width: 25%;
`;

export default RightColumn;