import React from 'react';
import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom';
import { CaretDownFill } from 'react-bootstrap-icons';
import logo from '../../../Assets/logo.svg';
import '../../../Helpers/fonts.css';

function Header({ loggedIn, setCurrentTab }){
    const navigate = useNavigate(); 
    const startInvesting = () => {
        if(loggedIn){
            navigate("/invest");
        } else {
            alert("Please sign in to invest");
        }
    };
    const goHome = () => navigate("/");
    const loginClickHandler = (event) => {
        setCurrentTab(event.target.id);
        navigate("/login");
    }

    return(
        <HeaderContainer>
            <ImgLogo onClick={goHome} src={logo}  />
            <MiddleContent>
                <ButtonLeft onClick={startInvesting} >START INVESTING</ButtonLeft>
                <Input />
                <LeftNavH4>INVESTHUBCONNECTS</LeftNavH4>
            </MiddleContent>
            <RightNav>
                <StyledNavLink>RAISE CAPITAL</StyledNavLink>
                {loggedIn ?
                    <LoggedInBubble>
                        <StyledP>A</StyledP>
                        <CaretDownFill size={15}/>
                    </LoggedInBubble>
                :<><LoginButton id="log" onClick={loginClickHandler}>LOGIN</LoginButton>
                 <SignUpButton id="sign" onClick={loginClickHandler}>SIGN UP</SignUpButton></>}
            </RightNav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background-color: #f0EFF3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7em 0em;
`;

const ImgLogo = styled.img`
    display: flex;
    max-height: 1.3em;
    padding-left: 1em;
    &:hover{
        cursor: pointer;
    }
`;

const MiddleContent = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    padding-right: 5em;
`;

const ButtonLeft = styled.button`
    background: linear-gradient(to right, #FF6F4F, #E0FF4F);
    padding: .25em .35em;
    font-size: 1.1rem;
    cursor: pointer;
    font-family: Vision Bold;
`;

const LeftNavH4 = styled.h4``;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search',
})`
    max-width: 10em;
    ::placeholder{
        font-family: Vision Light Italic;
    }
`;

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
    border-width: .2em;
    border-color: #E0FF4F;
    padding: .2em .5em;
    text-decoration: none;
    color: #0E1C28;
    font-family: Noah Regular;
    &:visited{
        color: black;
    }
`;

const LoginButton = styled.button`
    background: transparent;
    border: solid;
    border-color: #f0EFF3;
    font-size: 1rem;
    cursor: pointer;
    font-family: Noah Regular;
`;

const SignUpButton = styled.button`
    background: #E0FF4F;
    padding: .3em 1em;
    font-size: 1rem;
    border: solid;
    border-color: #f0EFF3;
    cursor: pointer;
    font-family: Noah Regular;
`
const LoggedInBubble = styled.div`
    margin-right: 1.5em;
    display: flex;
    align-items: center;
    gap: .2em;
`;

const StyledP = styled.p`
    border: solid .1rem #E0FF4F;
    padding: .5em .7em;
    border-radius: 50px;
    background-color: #CCCCCC;
`;

export default Header;