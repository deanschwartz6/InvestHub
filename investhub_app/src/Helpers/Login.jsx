import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Main from '../Pages/Home/Main';
import InvestHubLogo from '../Assets/logo-login.png';
import LinkedIn from '../Assets/linkedin-icon.png';
import Google from '../Assets/google-icon.png';
import Apple from '../Assets/apple-icon.png';
import UserIcon from '../Assets/user-icon-login.png';

function Login({ setLoggedIn, currentTab, setCurrentTab }){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
    });
    const formChange = (event) => {
        const dataChange = { ...formData };
        dataChange[event.target.id] = event.target.value;
        setFormData(dataChange);
    };
    const rememberMeHandler = () => console.log("Remember me checked");
    const newsletterCheckHandler = () => console.log("Newsletter clicked");
    const signUpSubmit = async (event) => {
        event.preventDefault();
        const requestConfig = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        };
        const response = await fetch('http://localhost:5000/logins', requestConfig);
        const data = await response.json();
        console.log("Fetched:", data);
        setFormData({
            full_name: "",
            email: "",
            password: "",
        });
        setCurrentTab("log");
    }

    const buttonOnClick = (event) => {
        setCurrentTab(event.target.id);
    };

    const [loginFormData, setLoginFormData] = useState({
        loginEmail: "",
        loginPassword: "",
    });
    const loginFormChange = (event) => {
        const loginDataChange = { ...loginFormData };
        loginDataChange[event.target.id] = event.target.value;
        setLoginFormData(loginDataChange);
    };
    const loginSubmit = (event) => {
        event.preventDefault();
        console.log(loginFormData);
        setLoginFormData({
            loginEmail: "",
            loginPassword: "",
        });
        //if validated
        setLoggedIn(true);
        navigate("/");
    };
    
    return(
        <>
        <ContentWrapper>
            <LoginComponent>
                <LeftSide>
                    <LeftWrapper>
                        <StyledP>WELCOME TO</StyledP>
                        <StyledImg src={InvestHubLogo} />
                        <TextStyled>Reserve your spot in the best<br/>global campaigns</TextStyled>
                    </LeftWrapper>
                </LeftSide>
                <RightSide>
                    <Tabs>
                        <Tab id="sign" current={currentTab} >
                            <StyledButton id="sign" current={currentTab} onClick={buttonOnClick} >SIGN UP</StyledButton>
                        </Tab>
                        <Tab id= "log" current={currentTab} >
                            <StyledButton id="log" current={currentTab} onClick={buttonOnClick} >LOG IN</StyledButton>
                        </Tab>
                    </Tabs>
                    {currentTab === "sign"
                    ?<>
                        <StyledDiv>
                            <Card>
                                <WrapA>
                                    <LinkedInIcon src={LinkedIn} />
                                </WrapA>
                                <WrapB>
                                    <Text>SIGN UP WITH LINKEDIN</Text>
                                </WrapB>
                            </Card>
                            <Card>
                                <WrapA>
                                    <GoogleIcon src={Google} />
                                </WrapA>
                                <WrapB>
                                    <Text>SIGN UP WITH GOOGLE</Text>
                                </WrapB>
                            </Card>
                            <Card>
                                <WrapA>
                                    <AppleIcon src={Apple} />
                                </WrapA>
                                <WrapB>
                                    <Text>SIGN UP WITH APPLE</Text>
                                </WrapB>
                            </Card>
                        </StyledDiv>
                        <MiddleDivSM>
                            <StyledSpan><StyledHr /></StyledSpan>
                            <StyledPMid>or</StyledPMid>
                            <StyledSpan><StyledHr /></StyledSpan>
                        </MiddleDivSM>
                        <StyledForm onSubmit={signUpSubmit} >
                            <StyledInput id="full_name" type="text" name="full_name" onChange={formChange} value={formData.full_name} placeholder="Full Name" required />
                            <StyledInput id="email" type="email" name="email" onChange={formChange} value={formData.email} placeholder="Email" required />
                            <StyledInput id="password" type="password" name="email" onChange={formChange} value={formData.password} placeholder="Password" required />
                            <CheckboxDiv>
                                <Checkbox type="checkbox" id="remember" onClick={() => rememberMeHandler()}/>
                                <StyledText>Remember me</StyledText>
                            </CheckboxDiv>
                            <StyledSubmit type="submit" value="SIGN UP" />
                        </StyledForm>
                        <CheckboxTwoWrapper>
                            <Checkbox type="checkbox" id="newsletter" onClick={() => newsletterCheckHandler()} />
                            <CheckText>Send me newsletters of more trending startups and entrepeneurs around the world</CheckText>
                        </CheckboxTwoWrapper>
                        <TextWrapper>
                            <BottomText>By signing up.. you agree to our <PSpan>Privacy Policy</PSpan>, <PSpan>Cookie Policy</PSpan>, and <PSpan>Terms of Use</PSpan>.<br/><RSpan>Read More</RSpan></BottomText>
                        </TextWrapper>
                     </>
                    : <>
                        <LoginWrapper>
                            <UserIconImg src={UserIcon} />
                            <LoginForm onSubmit={loginSubmit} >
                                <LoginInput id="loginEmail" type="email" name="loginEmail" onChange={loginFormChange} value={loginFormData.loginEmail} placeholder="Email" required />
                                <LoginInput id="loginPassword" type="password" name="loginPassword" onChange={loginFormChange} value={loginFormData.loginPassword} placeholder="Password" required />
                                <CheckboxDiv>
                                <Checkbox type="checkbox" id="remember" onClick={() => rememberMeHandler()}/>
                                    <StyledText>Remember me</StyledText>
                                </CheckboxDiv>
                                <LoginSubmit type="submit" value="LOG IN" />
                            </LoginForm>
                        </LoginWrapper>
                     </>}
                </RightSide>
            </LoginComponent>
        </ContentWrapper>
        <Main />
        </>
    );
}

const ContentWrapper = styled.div`
    background: rgba(243, 243, 243, 0.6);
    margin-bottom: -80em;
    z-index: 1;
    height: 80em;
`;

const LoginComponent = styled.div`
    background-color: #0E1C28;
    display: flex;
    margin: 7em 8.5em;
`;

const LeftSide = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`;

const RightSide = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    width: 100%;
    margin-bottom: 1.5em;
`;

const StyledP = styled.p`
    color: #E0FF4F;
    font-family: Noah Regular;
    font-size: 1.5em;
    font-weight: bold;
`;

const StyledImg = styled.img`
    width: 70%;
    margin-bottom: .5em;
`;

const Tabs = styled.div`
    display: flex;
    gap: 1.5em;
    margin-top: 2.5em;
    margin-bottom: 2em;
`;

const Tab = styled.div`
    width: 4em;
    ${({ id, current }) => {
        if(current === id){
            return css`border-bottom: solid .2rem #FF6F4F;`;
        }
    }}
`;

const TextStyled = styled.p`
    color: white;
    text-align: center;
    font-family: Vision Light Italic;
    font-size: 1.2em;
`;

const StyledButton = styled.button`
    margin-bottom: .3em;
    color: #CCCCCC;
    background: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    width: 5em;
    margin-left: -.5em;
    font-family: Noah Bold;
    ${(props) => {
        if(props.id === props.current){
            return css`color: #FF6F4F;`;
        }
    }}
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em 0em;
    width: 100%;
`;

const Card = styled.div`
    background-color: #CCCCCC;
    display: flex;
    margin: 0em 5em;
    cursor: pointer;
`;

const LinkedInIcon = styled.img`
    width: 37%;
`;

const Text = styled.p`
    text-align: center;
    color: white;
    font-size: .85em;
    font-family: Noah Regular;
`;

const GoogleIcon = styled.img`
    width: 38%;
`;

const AppleIcon = styled.img`
    width: 35%;
`;

const MiddleDivSM = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
    margin-top: -1em;
`;

const StyledSpan = styled.span`
    width: 1em;
`;

const StyledPMid= styled.p`
    color: #CCCCCC;
    font-size: 1.2em;
`;

const StyledHr = styled.hr`
    background-color: #CCCCCC;
    color: #CCCCCC;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`;

const StyledInput = styled.input`
    padding: .7em;
    width: 22em;
    ::placeholder{
        font-family: Vision Light Italic;
        color: #AFAFAF;
    }
`;

const CheckboxDiv = styled.div`
    display: flex;
    width: 20.2em;
    gap: .5em;
    align-items: left;
    margin-top: -1em;
    margin-bottom: -1em;
`;

const Checkbox = styled.input``;

const StyledText = styled.p`
    color: #FF6F4F;
    font-family: Vision Regular;
`;

const StyledSubmit = styled.input`
    background-color: #E0FF4F;
    border: none;
    font-family: Noah Bold;
    font-size: 1em;
    padding: .4em 1em;
    margin: 1em 0em;
    cursor: pointer;
`;

const CheckboxTwoWrapper = styled.div`
    display: flex;
    width: 20.2em;
    gap: .5em;
    align-items: left;
    padding-bottom: 2em;
`;

const CheckText = styled.p`
    margin-bottom: .2em;
    font-family: Vision Regular;
    font-size: .85em;
`;

const TextWrapper = styled.div`
    display: flex;
    width: 19.5em;
    gap: .5em;
    align-items: left;
    margin-top: -2em;
    margin-bottom: 2em;
`;

const BottomText = styled.p`
    font-family: Vision Regular;
    font-size: .95em;
`;

const PSpan = styled.span`
    color: #FF6F4F;
    cursor: pointer;
`;

const RSpan = styled.span`
    color: #FF6F4F;
    font-family: Vision Bold;
    cursor: pointer;
`;

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const UserIconImg = styled.img`
    margin: 2em 0em;
    width: 12%;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
`;

const LoginInput = styled.input`
    width: 95%;
    padding: .8em .5em;
    ::placeholder{
        font-family: Vision Light Italic;
    }
`;

const LoginSubmit = styled.input`
    background-color: #E0FF4F;
    border: none;
    padding: .3em 1em;
    margin-top: 1em;
    margin-bottom: 7em;
    font-family: Noah Bold;
    font-size: 1.2em;
    cursor: pointer;
`;

const WrapA = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    margin-left: 1em;
`;

const WrapB = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
`;

export default Login;