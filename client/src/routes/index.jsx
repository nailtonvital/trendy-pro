import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SocialMedia from "../pages/socialMedia";
import Error from "../pages/notFound";
import Movie from "../pages/Movies/Movie"
import LoginPage from "../pages/Login/Login";

export default function RoutingApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Login" element={<LoginPage />} />
        <Route exact path="/SocialMedia" element={<SocialMedia />} />
        <Route exact path="/*" element={<Error />} />
        <Route exact path="/Movie" element={<Movie />} />

      </Routes>
    </Router>
  );
}
