import { get } from 'axios';
export default class Movie {
    constructor() { }

    getTrendingMoviesDay() {
        get('https://api.themoviedb.org/3/trending/movie/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
            .then(function (response) {
                // manipula o sucesso da requisição
                console.log(response.data.results);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }

    getTrendingTvShowsDay() {
        get('https://api.themoviedb.org/3/trending/tv/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
            .then(function (response) {
                // manipula o sucesso da requisição
                console.log(response.data.results);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }

    getTrendingMoviesWeek() {
        get('https://api.themoviedb.org/3/trending/movie/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
            .then(function (response) {
                // manipula o sucesso da requisição
                console.log(response.data.results);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }

    getTrendingTvShowsWeek() {
        get('https://api.themoviedb.org/3/trending/tv/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
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

    getMovie(movie_id) {

        get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
            .then(function (response) {
                // manipula o sucesso da requisição
                console.log(response.data);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }

    getTV(tv_id) {
        get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
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

export function getTrendingMoviesDay(req, res) {
    get('https://api.themoviedb.org/3/trending/movie/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            res.send(response.data.results);
        })
        .catch(function (error) {
            // manipula erros da requisição
            res.send(error);
        })
}

export function getTrendingTvShowsDay(req, res) {
    get('https://api.themoviedb.org/3/trending/tv/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            res.send(response.data.results);
        })
        .catch(function (error) {
            // manipula erros da requisição
            res.send(error);
        })
}

export function getTrendingMoviesWeek(req, res) {
    get('https://api.themoviedb.org/3/trending/movie/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            res.send(response.data.results);
        })
        .catch(function (error) {
            // manipula erros da requisição
            res.send(error);
        })
}

export function getTrendingTvShowsWeek(req, res) {
    get('https://api.themoviedb.org/3/trending/tv/week?api_key=502709b57a68d03a1d751fc801b2b4ea')
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

export function getMovie(req, res) {
    const { movie_id } = req.query
    get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
        .then(function (response) {
            // manipula o sucesso da requisição
            res.send(response.data);
        })
        .catch(function (error) {
            // manipula erros da requisição
            res.send(error);
        })
}

export function getTV(req, res) {
    const { tv_id } = req.query
    get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
        .then(function (response) {
            // manipula o sucesso da requisição
            res.send(response.data);
        })
        .catch(function (error) {
            // manipula erros da requisição
            res.send(error);
        })
}