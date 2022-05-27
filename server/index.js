const express = require('express');
const googleTrends = require('google-trends-api');
const cors = require('cors');
const res = require('express/lib/response');
const server = express();

server.use(cors());

server.use(express.json());
/* 
server.get('/relatedTopics', async (request, response) => {
    const { word } = request.query
    
    const related = await googleTrends.relatedTopics({ keyword: word })
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.rankedList
            const result = text[0].rankedKeyword.forEach(element => {
               arr.push(element.topic.title)
            });
            response.send(arr)
        })
        .catch((err) => {
            response.send(err);
        })
});

server.get('/relatedQueries', async (request, response) => {
    const { word } = request.query
    
     await googleTrends.relatedQueries({ keyword: word })
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.rankedList
            const result = text[0].rankedKeyword.forEach(element => {
               arr.push(element.query)
            });
            response.send(arr)
        })
        .catch((err) => {
            response.send(err);
        })
});
*/
server.get('/dailyTrends', async (request, response) => {
    const local = request.query.geo
    
    await googleTrends.dailyTrends({geo: local})
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.trendingSearchesDays[0]
            text.trendingSearches.forEach(e=>{
                arr.push({["query"]: e.title.query,["traffic"]: e.formattedTraffic})
            });
            response.send(arr)
        })
        .catch((err) => {
            console.log(err);
        })
});

server.get('/interestOverTime', async (request, response) => {
    //const { word } = request.query
    
     await googleTrends.interestOverTime({ keyword: 'anime' })
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.timelineData
            const result = text
            response.send(result)
        })
        .catch((err) => {
            response.send(err);
        })
});


server.listen(3333, (err) => {
    if (!err) {
        console.log('Port: 3333')
    }
})