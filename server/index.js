import * as dotenv from 'dotenv'
dotenv.config()

import express, { application, json} from 'express';
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

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "nailton123",
    database: "trendypro",
});

const JWTSecret = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

server.use(cors());
server.use(json());

server.get('/', (req, res) => {
    res.send("Welcome to the TrendyPro")
});

// AUTH

// create user
server.post("/register", (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { occupation } = req.body;
    const { password } = req.body;
    
    if ( name, email, password){
        let hashPassword = bcrypt.hashSync(password, 10);

        let sql = "INSERT INTO user (name, occupation, email, password, date_joined) VALUES (?,?,?,?,?)"
        db.query(sql, [name, occupation, email, hashPassword, new Date()], (err, result) => {
            if (err) {
                res.status(206)
                res.send(err.sqlMessage);
            } else {
                res.status(201)
                res.send("User created");
            }
        })
    } else{
        res.status(400)
    }

});

// auth
server.post('/auth', (req, res)=>{
    var { email, password } = req.body;

    if(email){
        let sql = `SELECT * FROM user WHERE email='${email}'`
        db.query(sql, (err, result) => {
            if (err) {
                res.status(400)
                res.send(err.sqlMessage);
            } else {
                res.status(200)
                if(password){
                    if (bcrypt.compareSync(password, result[0].password)) {
                        jwt.sign({ id: result[0].idUser, email: result[0].email},JWTSecret,(error,token)=>{
                            if(!error){
                                res.status(200);
                                res.json({ token: token });
                            }else{
                                res.status(400);
                                res.json({ err: "Falha interna" });
                            }
                        })
                    } else {
                        res.status(400)
                        res.send("dont match");
                    }
                } else{
                    res.status(400)
                    res.send("senha invalida")
                }
                

            }
        })
    } else {
        res.status(400)
        res.send({ err: "O E-mail enviado é inválido" });
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
    if (req.query.keyword) {
        const word = req.query.keyword
        googleTrends.getRelatedTopics(word)
        .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/relatedQueries', (req, res) => {
    if (req.query.keyword) {
    const word = req.query.keyword
    googleTrends.getRelatedQueries(word)
        .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/dailyTrends', (req, res) => {
    if (req.query.geo) {
    const { geo } = req.query
    googleTrends.getDailyTrends(geo)
        .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/interestOverTime', (req, res) => {
    if (req.query.keyword) {
    const word = req.query.keyword
    googleTrends.getInterestOverTime(word)
        .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

// Google Cloud Area

server.get('/pageSpeed', (req, res) => {
    if (req.query.url) {
    const { url } = req.query
    pageSpeed(url).then(data => {
        res.send(data)
    })
    } else {
        res.sendStatus(400);
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

server.get("/trendingTV", (require, res) => {
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


let port = process.env.PORT || 3333
server.listen(port, (err) => {
    if (!err) {
        console.log(`Port: ${port}`)
    }
})