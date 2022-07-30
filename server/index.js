import * as dotenv from 'dotenv'
dotenv.config()

import db from './mysql.js'
import express, { json } from 'express';
import cors from 'cors';
const server = express();
import * as googleTrends from '../server/controllers/GoogleTrendsControllers.js';
import MovieClass, * as tmdb from '../server/controllers/MovieController.js';
import Trends, * as trend from '../server/controllers/TrendsController.js';
import { pageSpeed } from './controllers/GoogleCloudController.js'


new MovieClass().deleteAllMovies()
    


// new Trends().getInterestOverTime('messi')
//     .then(data =>{
//         console.log(data)
// })
    
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
server.get('/relatedTopics', (req,res)=>{
    const word = req.query.keyword
    googleTrends.getRelatedTopics(word)
        .then(data => res.send(data))
});

server.get('/relatedQueries', (req, res) => {
    const word = req.query.keyword
    googleTrends.getRelatedQueries(word)
        .then(data => res.send(data))
});

server.get('/dailyTrends', (req, res) => {
    const { geo } = req.query
    googleTrends.getDailyTrends(geo)
        .then(data => res.send(data))
});

server.get('/interestOverTime', (req, res) => {
    const word = req.query.keyword
    googleTrends.getInterestOverTime(word)
        .then(data => res.send(data))
});

// Google Cloud Area

server.get('/pageSpeed', (req, res) => {
    const { url } = req.query
               
    pageSpeed(url).then(data => {
        res.send(data)
        
    })
});

// // Entertainment Area

// // Trending Today
server.get("/trendingMovies", )
server.get("/trendingTV", )

// server.get("/getMovie", )
// server.get("/getTV/:id", )

// server.get("/trendingPersons", tmdb.getTrendingPersons)

// server.get('/movies', movies.getAllmovies)

// server.get('/movie/:movieId', movies.getMovieSelected)

server.listen(3333, (err) => {
    if (!err) {
        console.log('Port: 3333')
    }
})