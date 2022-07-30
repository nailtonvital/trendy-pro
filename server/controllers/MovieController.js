import mongoose from 'mongoose';
import * as moviedb from '../models/Movie.js'
import axios from 'axios'
import * as googleTrends from './GoogleTrendsControllers.js';
//const trend = require('../server/controllers/TrendsController.js');
import db from '../mysql.js'

export default class MovieClass{
    constructor() {}

    getTrendingMovies(){
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            let results = response.data.results
            results.map(res=>{
                axios.get(`https://api.themoviedb.org/3/movie/${res.id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
                    .then(function (resultData) {
                        let result = resultData.data
                        let test = result.genres.map(e => { return e.name })
                    
                            // console.log(test.map(e => { return e }))
                        let sql = "INSERT INTO movies (idMovies, title, originalTitle, image, overview, originalLanguage, releaseDate, voteAverage, runTime, genres, type) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                        db.query(sql, [result.id, result.title, result.original_title, result.poster_path, result.overview, result.original_language, result.release_date, result.vote_average, result.runtime, JSON.stringify(test), "movie" ], (err, res) => {
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
            })
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.log(error);
        })
    }
    deleteAllMovies(){
        let sql = "DELETE FROM movies"
        db.query(sql, (err, res)=>{
            if (err) {
                console.log(err);
            } else {
                console.log(res)
                if (res.length === 0) {
                    console.log("vazio")
                }
                // typeof result === null ? console.log("vazio") : console.log("cheio")
            }
        })
    }

    getTrendingTvShows(){
        axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
            .then(function (response) {
                // manipula o sucesso da requisição
                let results = response.data.results
                results.map(res => {
                    axios.get(`https://api.themoviedb.org/3/tv/${res.id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
                        .then(function (resultData) {
                            let result = resultData.data
                            let test = result.genres.map(e => { return e.name })
                            
                            // console.log(test.map(e => { return e }))
                            let sql = "INSERT INTO movies (idMovies, title, originalTitle, image, overview, originalLanguage, releaseDate, voteAverage, runTime, genres, type) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                            db.query(sql, [result.id, result.name, result.original_name, result.poster_path, result.overview, result.original_language, result.release_date, result.vote_average, result.runtime, JSON.stringify(test), "tv"], (err, res) => {
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
                })
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

}
