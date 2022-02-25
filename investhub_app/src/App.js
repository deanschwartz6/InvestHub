import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './Pages/Home/Main.js';
import NotFound from './Helpers/NotFound.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<NotFound />} />
      </Routes>
  );
}

export default App;
