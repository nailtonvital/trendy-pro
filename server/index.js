const express = require('express');
const cors = require('cors');
const server = express();
const googleTrends = require('../server/controllers/GoogleTrendsControllers')
const tmdb = require('../server/controllers/MovieController')
const trend = require('../server/controllers/TrendsController.js');

//const tr = new trend().getInterestOverTime("Messi")
const tr = new trend().getRelatedQueries("herogasm")

server.use(cors());

server.use(express.json());

// Google Trends Area
server.get('/relatedTopics', googleTrends.getRelatedTopics);

server.get('/relatedQueries', googleTrends.getRelatedQueries);

server.get('/dailyTrends', googleTrends.getDailyTrends);

server.get('/interestOverTime', googleTrends.getInterestOverTime);

// Entertainment Area
// Trending Today
server.get("/trendingMoviesToday", tmdb.getTrendingMoviesDay)
server.get("/trendingTVsToday", tmdb.getTrendingTvShowsDay)

// Trending This Week
server.get("/trendingMoviesWeek", tmdb.getTrendingMoviesWeek)
server.get("/trendingTVsWeek", tmdb.getTrendingTvShowsWeek)

server.get("/getMovie", tmdb.getMovie)
server.get("/getTV", tmdb.getTV)

// server.get("/trendingPersons", tmdb.getTrendingPersons)

server.listen(3333, (err) => {
    if (!err) {
        console.log('Port: 3333')
    }
})