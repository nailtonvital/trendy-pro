import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SocialMedia from "../pages/socialMedia";
import Error from "../pages/notFound";
import Movie from "../pages/Movie/Movie"
import LoginPage from "../pages/Login/Login";
import TodayTrends from "../pages/TodayTrends/TodayTrends";
import Movies from "../pages/Movies/Movies";

export default function RoutingApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/*" element={<Error />} />
        <Route exact path="/Login" element={<LoginPage />} />
        <Route exact path="/SocialMedia" element={<SocialMedia />} />
        <Route exact path="/Movies" element={<Movies />} />
        <Route exact path="/Movie" element={<Movie />} />
        <Route exact path="/todaytrends" element={<TodayTrends />} />

      </Routes>
    </Router>
  );
}
