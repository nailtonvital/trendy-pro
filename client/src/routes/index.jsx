import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SocialMedia from "../pages/socialMedia";
import Error from "../pages/notFound";
import Movie from "../pages/Movies/Movie"

export default function RoutingApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/SocialMedia" element={<SocialMedia />}></Route>
        <Route exact path="/*" element={<Error />}></Route>
        <Route exact path="/Movie" element={<Movie />}></Route>

      </Routes>
    </Router>
  );
}
