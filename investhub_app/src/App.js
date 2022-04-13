import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Main from './Pages/Home/Main';
import CompanyInvestPage from './Pages/CompanyInvest/CompanyInvestPage';
import Invest from './Pages/Invest/Invest';
import Login from './Helpers/Login';
import NotFound from './Helpers/NotFound';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentTab, setCurrentTab] = useState("");

  return (
    <ContentWrapper>
        <Routes>
          <Route path="/" 
            element={<Main 
              loggedIn={loggedIn} 
              setLoggedIn={setLoggedIn}
              setCurrentTab={setCurrentTab}
            />} 
          />
          <Route path="/company" 
            element={<CompanyInvestPage 
            />} 
          />
          <Route path="/invest" 
            element={<Invest
              loggedIn={loggedIn} 
              setLoggedIn={setLoggedIn}
              setCurrentTab={setCurrentTab}
            />} 
          />
          <Route path="/login" 
            element={<Login
              setLoggedIn={setLoggedIn}
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
            />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: grid;
  margin: -.4em;
`;

export default App;
