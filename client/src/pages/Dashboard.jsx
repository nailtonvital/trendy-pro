import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <div className="flex-1 bg-white pl-7 pr-4 ml-20">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/*" element={<Error />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/SocialMedia" element={<SocialMedia />} />
          <Route exact path="/Movies" element={<Movies />} />
          <Route exact path="/Movie" element={<Movie />} />
          <Route exact path="/todaytrends" element={<TodayTrends />} />
        </Routes>
      </div>
    </div>
  );
}
