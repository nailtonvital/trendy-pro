const googleTrends = require('google-trends-api');

module.exports = class Trends{
    constructor(word){
        this.keyword = word;
    }

    async getInterestOverTime(keyword){ 
        let info = []
        await googleTrends.interestOverTime({ keyword: keyword })
        .then((res) => {
            let text = JSON.parse(res).default.timelineData
            text.map((p)=>{
                info.push({
                    time: p.formattedTime,
                    value: p.value
                })
            })
            
            console.log(info)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    async getRelatedQueries (keyword){
        await googleTrends.relatedQueries({ keyword: keyword })
            .then((res) => {
                let arr = []
                let text = JSON.parse(res).default.rankedList
                const result = text[0].rankedKeyword.forEach(element => {
                    arr.push(element.query)
                });
                console.log(arr)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async getRelatedTopics(keyword) {
        await googleTrends.relatedTopics({ keyword: keyword })
            .then((res) => {
                let arr = []
                let text = JSON.parse(res).default.rankedList
                const result = text[0].rankedKeyword.forEach(element => {
                    arr.push(element.topic.title)
                });
                console.log(arr)
            })
            .catch((err) => {
                console.log(err);
            })
    }

}

