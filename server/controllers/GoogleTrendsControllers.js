import googleTrends from 'google-trends-api';

// Get a list of top most searched terms today
export async function getDailyTrends(local) { 
    let arr 
    await googleTrends.dailyTrends({geo: local})
        .then((res) => {
            let text = JSON.parse(res).default.trendingSearchesDays[0]
            arr = text.trendingSearches
        })
        .catch((err) => {
            console.log(err);
        })
    return arr
}

// Get the amount of searches over time
export async function getInterestOverTime(word) { 
    let info = []
    await googleTrends.interestOverTime({ keyword: word, startTime: new Date(2022 - 01 - 01) })
        .then((res) => {
            let arr = []
            let text = JSON.parse(res).default.timelineData
            text.map((p)=>{
                info.push({
                    time: p.formattedTime,
                    value: p.value
                })
            })
        })
        .catch((err) => {
            return(err);
        })
    return info
}

// Get a list of related queries around a search-tearm
export async function getRelatedQueries(word) { 

    let arr = []

    await googleTrends.relatedQueries({ keyword: word })
    .then((res) => {
        let text = JSON.parse(res).default.rankedList
        const result = text[0].rankedKeyword.forEach(element => {
            arr.push(element.query)
        });
    })
    .catch((err) => {
        return(err);
    })
    return arr
}

// Get a list of related topics around a search-tearm
export async function getRelatedTopics(word){ 
    let arr = [];
    await googleTrends.relatedTopics({ keyword: word })
        .then((res) => {
            
            let text = JSON.parse(res).default.rankedList
            const result = text[0].rankedKeyword.forEach(element => {
               arr.push(element.topic.title)
            });
        })
        .catch((err) => {
            return(err);
        })
    return arr
}

