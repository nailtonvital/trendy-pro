import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import BacklinkChecker from "./BacklinkChecker";
import DailyTrends from "./DailyTrends";
import Interests from "./Interests";
import KeywordGenerator from "./KeywordGenerator";
import MoviePage from "./MoviePage";
import MoviesPage from "./MoviesPage";
import RelatedQueries from "./RelatedQueries";
import RelatedTopics from "./RelatedTopics";
import RelatedInterest from "./RelatedInterest";
import PageSpeed from "./RelatedPageSpeed";
import SeoTools from "./SeoTools";
import SocialMedia from "./SocialMedia";
import Songs from "./Songs";
import Twitter from "./Twitter";
import TiktokPage from "./TiktokPage";
import AllNewsPage from "./AllNewsPage";
import NewsPage from "./NewsPage";

export default function Dashboard() {
  const [sidebarHover, setSidebarHover] = useState(false);

  function toggleSidebar() {
    console.log(sidebarHover);
    setSidebarHover(!sidebarHover);
  }

  return (
    <div className="flex bg-[#262631] h-full overflow-x-hidden " id="scrollbar">
      <Sidebar />
      <div className="w-full mr-5 ml-24">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movie" element={<MoviePage />} />
          <Route path="songs" element={<Songs />} />
          <Route path="social-media" element={<SocialMedia />} />
          <Route path="social-media/google" element={<DailyTrends />} />
          <Route path="social-media/twitter" element={<Twitter />} />
          <Route path="social-media/tiktok" element={<TiktokPage />} />
          <Route path="seo-tools" element={<SeoTools />} />
          <Route path="seo-tools/related-queries" element={<RelatedQueries />} />
          <Route path="seo-tools/related-topics" element={<RelatedTopics />} />
          <Route path="seo-tools/interest-overtime" element={<RelatedInterest />} />
          <Route path="seo-tools/facebook-interests" element={<Interests />} />
          <Route path="seo-tools/pagespeed-insights" element={<PageSpeed />} />
          <Route path="seo-tools/backlink-checker" element={<BacklinkChecker />} />
          <Route path="seo-tools/keyword-generator" element={<KeywordGenerator />} />
          <Route path="seo-tools/seo-checker" />
          <Route path="rss-feed" element={<AllNewsPage/>} />
          <Route path="rss-feed/news" element={<NewsPage/>} />
        </Routes>
      </div>
    </div>
  );
}
