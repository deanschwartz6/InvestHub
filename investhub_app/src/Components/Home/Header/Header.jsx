import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../../Assets/logo.svg';

function Header(){
    return(
        <HeaderContainer>
            <ImgLogo src={logo} />
            <MiddleContent>
                <ButtonLeft>Start Investing</ButtonLeft>
                <Input />
                <LeftNavH4>INVESTHUBCONNECTS</LeftNavH4>
            </MiddleContent>
            <RightNav>
                <StyledNavLink>Raise Capital</StyledNavLink>
                <LoginButton>Login</LoginButton>
                <SignUpButton>Sign Up</SignUpButton>
            </RightNav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background-color: #f0EFF3;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ImgLogo = styled.img `
    display: flex;
    max-height: 1.3em;
    padding-left: 1em;
`;

const MiddleContent = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    padding-right: 5em;
`;

const ButtonLeft = styled.button`
    background: linear-gradient(to right, #FF6F4F, #E0FF4F);
    padding: .3em .5em;
    font-size: .9rem;
    font-weight: bold;
`;

const LeftNavH4 = styled.h4``;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search',
})` max-width: 10em; `;

const RightNav = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    padding-right: 1em;
`;

const StyledNavLink = styled(NavLink).attrs({
    to: '/raise-capital',
})`
    border: solid;
    border-width: .15em;
    border-color: #E0FF4F;
    padding: .2em .5em;
    text-decoration: none;
    color: #0E1C28;
    &:visited{
        color: black;
    }
`;

const LoginButton = styled.button`
    background: transparent;
    border: solid;
    border-color: #f0EFF3;
    font-size: 1rem;
`;

const SignUpButton = styled.button`
    background: #E0FF4F;
    padding: .2em 1em;
    font-size: .9rem;
    border: solid;
    border-color: #f0EFF3;
`


export default Header;