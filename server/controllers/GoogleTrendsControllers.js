const googleTrends = require('google-trends-api');

// Get a list of top most searched terms today
exports.getDailyTrends = async function (request, response){
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
}

// Get the amount of searches over time
exports.getInterestOverTime = async (request, response) => {
    const word = request.query.keyword
    info = []
     await googleTrends.interestOverTime({ keyword: word })
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.timelineData
            text.map((p)=>{
                info.push({
                    time: p.formattedTime,
                    value: p.value
                })
            })
            
            response.send(info)
        })
        .catch((err) => {
            response.send(err);
        })
}

// Get a list of related queries around a search-tearm
exports.getRelatedQueries = async (request, response) => {
    const word = request.query.keyword

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
}

// Get a list of related topics around a search-tearm
exports.getRelatedTopics = async (request, response) => {
    const word = request.query.keyword
    
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
}
