const axios = require('axios')
module.exports = class Movie{
    constructor() {}

    getTrendingMoviesDay(){
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            console.log(response.data.results);
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.log(error);
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
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
            .then(function (response) {
                // manipula o sucesso da requisição
                console.log(response.data.results);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
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
                console.log(response.data);
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
            console.log(response.data);
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.log(error);
        })
    }
}

exports.getTrendingMoviesDay = (req, res)=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
  .then(function (response) {
    // manipula o sucesso da requisição
    res.send(response.data.results);
  })
  .catch(function (error) {
    // manipula erros da requisição
    res.send(error);
  })
}

exports.getTrendingTvShowsDay = (req, res)=>{
    axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
  .then(function (response) {
    // manipula o sucesso da requisição
    res.send(response.data.results);
  })
  .catch(function (error) {
    // manipula erros da requisição
    res.send(error);
  })
}

exports.getTrendingMoviesWeek = (req, res)=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
  .then(function (response) {
    // manipula o sucesso da requisição
    res.send(response.data.results);
  })
  .catch(function (error) {
    // manipula erros da requisição
    res.send(error);
  })
}

exports.getTrendingTvShowsWeek = (req, res)=>{
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
  .then(function (response) {
    // manipula o sucesso da requisição
    res.send(response.data.results);
  })
  .catch(function (error) {
    // manipula erros da requisição
    res.send(error);
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

exports.getMovie = (req,res)=>{
  const { movie_id } = req.query
  axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
  .then(function (response) {
    // manipula o sucesso da requisição
    res.send(response.data);
  })
  .catch(function (error) {
    // manipula erros da requisição
    res.send(error);
  })
}

exports.getTV= (req,res)=>{
  const { tv_id } = req.query
  axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
  .then(function (response) {
    // manipula o sucesso da requisição
    res.send(response.data);
  })
  .catch(function (error) {
    // manipula erros da requisição
    res.send(error);
  })
}

