import React from 'react';
import { Routes, Route } from "react-router-dom";
import './app.css';
import Main from './Pages/Home/Main.jsx';
import NotFound from './Helpers/NotFound.jsx';

function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
