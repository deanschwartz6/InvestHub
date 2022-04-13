import React from 'react';
import styled, { css } from 'styled-components';

import ProfilePhoto from '../../../Assets/profile-user.png';

function SubNavHeader({ activeTab, setActiveTab }){
    const TabClickHandler = (id) => {
        setActiveTab(id);
    }
    return(
        <SubNavWrapper>
            <ProfileWrapper>
                <StyledImg src={ProfilePhoto} />
                <ImgTag>UPLOAD<br/>PHOTO</ImgTag>
            </ProfileWrapper>
            <NameTabWrapper>
                <StyledH1>Admin</StyledH1>
                <TabWrapper>
                    <Tabs id="1" current={activeTab}>
                        <StyledButton onClick={() => TabClickHandler("1")}>WATCH LIST</StyledButton>
                    </Tabs>
                    <Tabs id="2" current={activeTab}>
                        <StyledButton onClick={() => TabClickHandler("2")}>PORTFOLIO</StyledButton>
                    </Tabs>
                    <Tabs id="3" current={activeTab}>
                        <StyledButton onClick={() => TabClickHandler("3")}>CASH</StyledButton>
                    </Tabs>
                    <Tabs id="4" current={activeTab}>
                        <StyledButton onClick={() => TabClickHandler("4")}>BANKS</StyledButton>
                    </Tabs>
                    <Tabs id="5" current={activeTab}>
                        <StyledButton onClick={() => TabClickHandler("5")}>GET/GIVE $2500</StyledButton>
                    </Tabs>
                    <Tabs id="6" current={activeTab}>
                        <StyledButton onClick={() => TabClickHandler("6")}>SETTINGS</StyledButton>
                    </Tabs>
                </TabWrapper>
            </NameTabWrapper>
        </SubNavWrapper>
    );
}

const SubNavWrapper = styled.div`
    display: flex;
    background-color: #CCCCCC;
    padding-bottom: 1em;
    padding-left: 1.5em;
`;

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
    margin-left: 3em;
`;

const StyledImg = styled.img`
    width: 89%;
    border: dashed .3rem #E0FF4F;
    border-radius: 50px;
`;

const ImgTag = styled.p`
    text-align: center;
    color: white;
    font-size: .75rem;
`;

const NameTabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3.5em;
`;

const StyledH1 = styled.h1`
    text-decoration: underline .15rem #FF6F4F;
    font-size: 1.7rem;
    font-weight: normal;
    margin-top: 1.4em;
    margin-left: .2em;
`;

const TabWrapper = styled.div`
    display: flex;
    margin-left: -1em;
`;

const Tabs = styled.div`
    ${({ id, current }) => {
        if(id === current){
            return css`border-bottom: solid .2rem #E0FF4F;`
        } else {
            return css`border-bottom: solid .19rem #E7E7E7;`
        }
    }}
`;

const StyledButton = styled.button`
    padding: 1em 1.5em;
    padding-bottom: 1.5em;
    font-size: .95rem;
    background: transparent;
    border: none;
    cursor: pointer;
`;

export default SubNavHeader;