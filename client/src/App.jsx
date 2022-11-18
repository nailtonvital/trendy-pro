import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="" />
          <Route path="movies" />
          <Route path="movie" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
