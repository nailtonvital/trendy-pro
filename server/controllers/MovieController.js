import * as moviedb from '../models/Movie.js'
import axios from 'axios'
//const trend = require('../server/controllers/TrendsController.js');

export default class MovieClass{
    constructor() {}

    getTrendingMoviesDay(){
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            let results = response.data.results

            results.map(result=>{
                //verifica se existe no banco
                findOne({title:result.title}, (err, data) => {
                    if(!data){
                        let newMovie = new Movie({
                            id: result.id,
                            title:result.title,
                            originalTitle: result.original_title,
                            image:result.poster_path,
                            originalLanguage: result.original_language,
                            releaseDate: result.release_date,
                            overview: result.overview,
                            genres:result.genres,
                            voteAverage: result.vote_average
                        });

                        newMovie.save((err, data)=>{
                            if(err) console.log({Error: err});
                            console.log(data);
                        });
                    }else{
                        if(err) console.log(`Something went wrong, please try again. ${err}`);
                        console.log({message:"Movie already exists"});
                    }
                })
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

        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
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
