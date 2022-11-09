import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Movie from "./Movie/Movie";
import Movies from "./Movies/Movies";
import Error from "./notFound";
import RelatedKeywords from "./RelatedKeywords/RelatedKeywords";
import SocialMedia from "./socialMedia";
import TodayTrends from "./TodayTrends/TodayTrends";

export default function Dashboard() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="flex-1 bg-white pl-7 pr-4 ml-20">
        <Routes>
          <Route exact path="/*" element={<Error/>} />
          <Route path="social-media" element={<SocialMedia />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie" element={<Movie />} />
          <Route path="todaytrends" element={<TodayTrends />} />
          <Route path="related-keywords" element={<RelatedKeywords />} />
        </Routes>
      </div>
    </div>
  );
}
