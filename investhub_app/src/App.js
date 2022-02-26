import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './Pages/Home/Main.jsx';
import NotFound from './Helpers/NotFound.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
