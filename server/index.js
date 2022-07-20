import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';
import express, { json } from 'express';
import cors from 'cors';
const server = express();
import * as googleTrends from '../server/controllers/GoogleTrendsControllers.js';
import MovieClass, * as tmdb from '../server/controllers/MovieController.js';
import * as trend from '../server/controllers/TrendsController.js';
import { pageSpeed } from './controllers/GoogleCloudController.js'

mongoose.connect(
    process.env.MONGODB_URI,
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);



// new MovieClass().getTrendingMoviesWeek()
//     .then(data => {
//         console.log(data.results)
//     })
//     .catch(err => console.log(err))

pageSpeed('https://www.npmjs.com')
    

// server.get('/pageSpeed', googleTrends.getRelatedTopics);
// pageSpeed("https://developers.google.com")

//const tr = new trend().getInterestOverTime("Messi").then()
//const tr = new trend().getRelatedQueries("herogasm")
//const tr = new trend().getRelatedTopics("anime");
//const tr = new tmdb().getTV(66732)
//const tr = new tmdb().getMovie(414906)
//const tr  = new tmdb().getTrendingMoviesDay()
//const tr  = new tmdb().deleteAllMovies()

server.use(cors());

server.use(json());

// // Google Trends Area
// server.get('/relatedTopics', googleTrends.getRelatedTopics);

// server.get('/relatedQueries', googleTrends.getRelatedQueries);

// // server.get('/dailyTrends', googleTrends.getDailyTrends);

// server.get('/interestOverTime', googleTrends.getInterestOverTime);

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