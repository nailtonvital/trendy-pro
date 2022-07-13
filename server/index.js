require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const server = express();
const googleTrends = require('../server/controllers/GoogleTrendsControllers')
const tmdb = require('../server/controllers/MovieController')
const trend = require('../server/controllers/TrendsController.js');

mongoose.connect(
    process.env.MONGODB_URI,
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);

setInterval(()=>{

    result = new tmdb().getTrendingMoviesWeek()
    console.log(result.value)
    }, 1000);

//const tr = new trend().getInterestOverTime("Messi").then()
//const tr = new trend().getRelatedQueries("herogasm")
//const tr = new trend().getRelatedTopics("anime");
//const tr = new tmdb().getTV(66732)
//const tr = new tmdb().getMovie(414906)
//const tr  = new tmdb().getTrendingMoviesDay()
//const tr  = new tmdb().deleteAllMovies()

server.use(cors());

server.use(express.json());

// Google Trends Area
server.get('/relatedTopics', googleTrends.getRelatedTopics);

server.get('/relatedQueries', googleTrends.getRelatedQueries);

// server.get('/dailyTrends', googleTrends.getDailyTrends);

server.get('/interestOverTime', googleTrends.getInterestOverTime);

// // Entertainment Area
// // Trending Today
// server.get("/trendingMoviesToday", tmdb.getTrendingMoviesDay)
// server.get("/trendingTVsToday", tmdb.getTrendingTvShowsDay)

// // Trending This Week
// server.get("/trendingMoviesWeek", tmdb.getTrendingMoviesWeek)
// server.get("/trendingTVsWeek", tmdb.getTrendingTvShowsWeek)

// server.get("/getMovie", tmdb.getMovie)
// server.get("/getTV", tmdb.getTV)

// server.get("/trendingPersons", tmdb.getTrendingPersons)

// server.get('/movies', movies.getAllmovies)

// server.get('/movie/:movieId', movies.getMovieSelected)



server.listen(3333, (err) => {
    if (!err) {
        console.log('Port: 3333')
    }
})