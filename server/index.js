const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const server = express();
const googleTrends = require('../server/controllers/GoogleTrendsControllers')

server.use(cors());

server.use(express.json());

server.get('/relatedTopics', googleTrends.getRelatedTopics);

server.get('/relatedQueries', googleTrends.getRelatedQueries);

server.get('/dailyTrends', googleTrends.getDailyTrends);

server.get('/interestOverTime', googleTrends.getInterestOverTime);

server.listen(3333, (err) => {
    if (!err) {
        console.log('Port: 3333')
    }
})