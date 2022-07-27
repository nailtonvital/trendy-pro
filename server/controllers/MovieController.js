import mongoose from 'mongoose';
import * as moviedb from '../models/Movie.js'
import axios from 'axios'
import * as googleTrends from './GoogleTrendsControllers.js';
//const trend = require('../server/controllers/TrendsController.js');
import db from '../mysql.js'

export default class MovieClass{
    constructor() {}

    getTrendingMoviesDay(){
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            let results = response.data.results
            

            // let sql = "SELECT * FROM movies WHERE";
            // db.query(sql, (err, result) => {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         if (result.length === 0){
            //             console.log("vazio") 
            //         }
            //         // typeof result === null ? console.log("vazio") : console.log("cheio")
            //     }

            // })

            results.map(res=>{
                
                axios.get(`https://api.themoviedb.org/3/movie/${res.id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
                    .then(function (resultData) {
                        let result = resultData.data
                        let test = result.genres.map(e => { return e.name })
                    
                            // console.log(test.map(e => { return e }))
                        let sql = "INSERT INTO movies (idMovies, title, originalTitle, image, overview, originalLanguage, releaseDate, voteAverage, runTime, genres) VALUES (?,?,?,?,?,?,?,?,?,?)";
                        db.query(sql, [result.id, result.title, result.original_title, result.poster_path, result.overview, result.original_language, result.release_date, result.vote_average, result.runtime, JSON.stringify(test) ], (err, res) => {
                            if (err) {
                                console.log(err);
                            } else {
                                if (res.length === 0) {
                                    console.log("vazio")
                                }
                                // typeof result === null ? console.log("vazio") : console.log("cheio")
                            }
                        })
                    }).catch(function (error) {
                        // manipula erros da requisição
                        console.log(error);
                    })
                // let sql = "INSERT INTO movies (idMovies, title, originalTitle, image, overview, originalLanguage, releaseDate, voteAverage, genres) VALUES (?,?,?,?,?,?,?,?,?)";
                // db.query(sql, [result.id, result.title, result.original_title, result.poster_path, result.overview, result.original_language, result.release_date, result.vote_average, result.genres], (err, res) => {
                //     if (err) {
                //         console.log(err);
                //     } else {
                //         if (res.length === 0) {
                //             console.log("vazio")
                //         }
                //         // typeof result === null ? console.log("vazio") : console.log("cheio")
                //     }

                // })
                
            })
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.log(error);
        })
    }
    deleteAllMovies(){
        deleteMany({}, err => {
            if(err) {
                console.log({message: "Complete delete failed"});
            }
            console.log({message: "Complete delete successful"});
        })
    }

    getTrendingTvShowsDay(){
        axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            console.log(response.data.results);
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.log(error);
        })
    }

    getTrendingMoviesWeek(){
        // create a promise for the axios request
        const promise = axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=502709b57a68d03a1d751fc801b2b4ea')

        // using .then, create a new promise which extracts the data
        const dataPromise = promise.then((response) => response.data)

        // return it
        return dataPromise  
    }

    getTrendingTvShowsWeek(){
        axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
            .then(function (response) {
                // manipula o sucesso da requisição
                console.log(response.data.results);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }

// exports.getTrendingPersons = (req, res)=>{
//     axios.get('https://api.themoviedb.org/3/trending/person/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
//   .then(function (response) {
//     // manipula o sucesso da requisição
//     res.send(response.data.results);
//   })
//   .catch(function (error) {
//     // manipula erros da requisição
//     res.send(error);
//   })
// }

    getMovie(movie_id){

        const movie = axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
            .then(function (response) {
                // manipula o sucesso da requisição
                let result = {}
                let results = response.data
                result = {
                    'id': results.id,
                    'title':results.title,
                    'original_title': results.original_title,
                    'poster_path':results.poster_path,
                    'original_language': results.original_language,
                    'release_date': results.release_date,
                    'overview': results.overview,
                    'genres':results.genres
                }
                console.log(results)
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }

    getTV(tv_id){
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
        .then(function (response) {
            // manipula o sucesso da requisição
            let movieResult = {}
            let movieResults = response.data

            movieResult = {
                'id': results.id,
                'title':results.name,
                'original_title': results.original_name,
                'poster_path':results.poster_path,
                'original_language': results.original_language,
                'release_date': results.release_date,
                'overview': results.overview,
                'genres':results.genres,
                //'interestOverTime':[],
                //'relatedTopics':[],
                //'relatedQueries': []
            }
            console.log(movieResultesult)
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.log(error);
        })
    }
}
