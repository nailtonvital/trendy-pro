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
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

const JWTSecret = process.env.JWT_SECRET

server.use(cors());
server.use(json());

const auth = (req,res,next)=>{
    const authToken = req.headers['authorization'];
    if(authToken){
        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token,JWTSecret,(err,data)=>{
            if(!err){
                next()
            } else{
                res.status(401).json({ err: "Token inválido!" });
            }
        })

    } else{
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
    
    if ( name, email, password){
        let hashPassword = bcrypt.hashSync(password, 10);

        let sql = "INSERT INTO user (name, occupation, email, password, date_joined) VALUES (?,?,?,?,?)"
        db.query(sql, [name, occupation, email, hashPassword, new Date()], (err, result) => {
            if (err) {
                res.status(406).json(err.sqlMessage);
            } else {
                res.status(201).json("User created");
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
        let sql = `SELECT * FROM user WHERE email= ?`
        db.query(sql,[email], (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                console.log(result)
                if (result.length == 0) {                    
                    res.status(404);
                    res.json({ err: "The e-mail sent does not exist in the database!" });
                } else{
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
        res.status(400).json({ err: "The e-mail sent is invalid" });
    }
})

// update profile picture




// Billboard Top 100 songs
server.get('/billboard-top-100', auth, (req, res) => {

    getChart('hot-100', (err, chart) => {
        if (err) console.log(err);
        res.send(chart.songs);
    });

});

// // Google Trends Area
server.get('/relatedTopics', auth, (req, res) => {
    if (req.query.keyword) {
        const word = req.query.keyword
        googleTrends.getRelatedTopics(word)
        .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/relatedQueries', auth, (req, res) => {
    if (req.query.keyword) {
    const word = req.query.keyword
    googleTrends.getRelatedQueries(word)
        .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/dailyTrends', auth, (req, res) => {
    if (req.query.geo) {
    const { geo } = req.query
    googleTrends.getDailyTrends(geo)
        .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

server.get('/interestOverTime', auth, (req, res) => {
    if (req.query.keyword) {
    const word = req.query.keyword
    googleTrends.getInterestOverTime(word)
        .then(data => res.send(data))
    } else {
        res.sendStatus(400);
    }
});

// Google Cloud Area

server.get('/pageSpeed', auth, (req, res) => {
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

server.get('/interests', auth, (req, res) => {
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
server.get("/trendingMovies", auth, (req, res) => {
    
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

server.get("/trendingTV", auth, (require, res) => {
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