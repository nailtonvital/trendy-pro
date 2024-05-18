import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import LandingPageForms from "./pages/LandingPageForms";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lp" element={<LandingPageForms />} />
        <Route path="/" element={<LandingPage />} />
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

export default App;
