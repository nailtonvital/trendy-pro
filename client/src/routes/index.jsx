import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SocialMedia from "../pages/socialMedia";
import Error from "../pages/notFound";
import Movie from "../pages/Movies/Movie"
import Keyword from "../pages/KeywordComparator/KeywordComparator";
import FacebookInterests from "../pages/FacebookInterests";

export default function RoutingApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/SocialMedia" element={<SocialMedia />} />
        <Route exact path="/*" element={<Error />} />
        <Route exact path="/Movie" element={<Movie />} />
        <Route exact path="/keywordComparator" element={ <Keyword/> } />
        <Route exact path="/FacebookInterests" element={ <FacebookInterests/> } />
      </Routes>
    </Router>
  );
}
