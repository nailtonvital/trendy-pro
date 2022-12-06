import * as dotenv from 'dotenv'
dotenv.config()

import express, { application, json } from 'express';
import cors from 'cors';
const server = express();
import axios from 'axios'
import { listCharts, getChart } from 'billboard-top-100'
import * as googleTrends from './controllers/GoogleTrendsControllers.js';
import { pageSpeed } from './controllers/GoogleCloudController.js'
import getFacebookInterests from './controllers/FacebookInterests.js'
import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { getTrendingAnimes, getAnimes } from './controllers/AnilistController.js';
import { backlink } from './controllers/BacklinkController.js';
// import { getTrendingTopics } from './controllers/TwitterController.js';
import * as twitter from '@killovsky/trendings'

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

const JWTSecret = process.env.JWT_SECRET

const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(urlString);
}

server.use(cors());
server.use(json());

const auth = (req, res, next) => {
    const authToken = req.headers['authorization'];
    if (authToken) {
        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, JWTSecret, (err, data) => {
            if (!err) {
                next()
            } else {
                res.status(401).json({ err: "Token inválido!" });
            }
        })

    } else {
        res.status(401).json({ err: "Token inválido!" });
    }
}

server.get('/', (req, res) => {
    res.status(200).json("Welcome to the TrendyPro");
});

// USER

// create user
server.post("/register", (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { occupation } = req.body;
    const { password } = req.body;

    if (name, email, password) {
        let hashPassword = bcrypt.hashSync(password, 10);

        let sql = "INSERT INTO user (name, occupation, email, password, date_joined) VALUES (?,?,?,?,?)"
        db.query(sql, [name, occupation, email, hashPassword, new Date()], (err, result) => {
            if (err) {
                res.status(406).json(err.sqlMessage);
            } else {
                res.status(201).json("User created");
            }
        })
    } else {
        res.status(400)
    }
});

// auth
server.post('/auth', (req, res) => {
    var { email, password } = req.body;

    if (email) {
        let sql = `SELECT * FROM user WHERE email= ?`
        db.query(sql, [email], (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                console.log(result)
                if (result.length == 0) {
                    res.status(404);
                    res.json({ err: "The e-mail sent does not exist in the database!" });
                } else {
                    res.status(200)
                    if (password) {
                        if (bcrypt.compareSync(password, result[0].password)) {
                            jwt.sign({ id: result[0].idUser, email: result[0].email }, JWTSecret, { expiresIn: '48h' }, (error, token) => {
                                if (!error) {
                                    res.status(200).json({ token: token });
                                } else {
                                    res.status(400).json({ err: "Falha interna" });
                                }
                            })
                        } else {
                            res.status(400).json("The passwords don't match");
                        }
                    } else {
                        res.status(401).json("The password sent is invalid")
                    }
                }
            }
        })
    } else {
        res.status(401).json({ err: "The e-mail sent is invalid" });
    }
})

// Billboard Top 100 songs
server.get('/billboard-top-100', (req, res) => {

    getChart('hot-100', (err, chart) => {
        if (err) console.log(err);
        res.send(chart.songs);
    });

});

// // Google Trends Area
server.get('/relatedTopics', (req, res) => {
    const word = req.query.keyword
    if (word) {
        googleTrends.getRelatedTopics(word)
            .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/relatedQueries', (req, res) => {
    const word = req.query.keyword
    if (word) {
        googleTrends.getRelatedQueries(word)
            .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/dailyTrends', (req, res) => {
    const { geo } = req.query
    if (geo) {
        googleTrends.getDailyTrends(geo)
            .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/interestOverTime', (req, res) => {
    const { keyword } = req.query

    if (keyword) {
        googleTrends.getInterestOverTime(keyword)
            .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

// Google Cloud Area

server.get('/pageSpeed', (req, res) => {
    const { url } = req.query
    if (isValidUrl(url)) {
        pageSpeed(url).then(data => {
            res.status(200).json(data)
        })
    } else {
        res.status(400);
    }
});

//Facebook Interests

server.get('/interests', (req, res) => {
    if (req.query.query) {
        const { query } = req.query

        getFacebookInterests(query)
            .then(response => {
                res.send(response)
            }).catch(error => {
                res.send(error);
            });
    } else {
        res.sendStatus(400);
    }
});

// // Entertainment Area

// // Trending Today
server.get("/trendingMovies", (req, res) => {

    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            res.send(response.data.results);
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.log(error);
        })
})

server.get("/trendingTV", (req, res) => {
    axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=502709b57a68d03a1d751fc801b2b4ea')
        .then(function (response) {
            // manipula o sucesso da requisição
            res.send(response.data.results);
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.log(error);
        })
})

server.get("/movie/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const movie_id = req.params.id
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
            .then(function (response) {
                // manipula o sucesso da requisição
                res.send(response.data);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }
})

server.get("/TV/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const tv_id = req.params.id
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
            .then(function (response) {
                // manipula o sucesso da requisição
                res.send(response.data);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }
})


server.get("/moviecredit/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const movie_id = req.params.id
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
            .then(function (response) {
                // manipula o sucesso da requisição
                res.send(response.data);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }
})

server.get("/moviekeywords/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const movie_id = req.params.id
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/keywords?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
            .then(function (response) {
                // manipula o sucesso da requisição
                res.send(response.data);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }
})

server.get("/tvcredit/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const tv_id = req.params.id
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
            .then(function (response) {
                // manipula o sucesso da requisição
                res.send(response.data);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }
})

server.get("/tvkeywords/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        const tv_id = req.params.id
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/keywords?api_key=502709b57a68d03a1d751fc801b2b4ea&language=en-US`)
            .then(function (response) {
                // manipula o sucesso da requisição
                res.send(response.data);
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.log(error);
            })
    }
})

// Anilist

server.get("/trendingAnimes", (req, res) => {
    getTrendingAnimes().then((e) => {
        res.json(e.data.Page.media)
    })
        .catch(err => {
            res.status(400).json(err)
        })
})

server.get("/anime/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        getAnimes(req.params.id).then((e) => {
            res.status(200).json(e)
        })
            .catch(err => {
                res.status(400).json(err)
            })
    }
})

server.get("/backlink", (req, res) => {
    const { url } = req.query

    if (isValidUrl(url)) {
        backlink(url).then(data => {
            res.status(200).json(data)
        })
    } else {
        res.status(400).json({ error: "Invalid URL" })
    }


})

server.get("/twitter", (req, res) => {
    const { country } = req.query

    if (country) {
        twitter.info(country)
            .then(data => {
                res.status(200).json(data)
            })
    } else {
        res.status(400).json({ error: "Invalid Country" })
    }



})

let port = process.env.PORT || 3333
server.listen(port, (err) => {
    if (!err) {
        console.log(`Port: ${port}`)
    }
})