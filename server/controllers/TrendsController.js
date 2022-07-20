import * as googleTrends from 'google-trends-api';

export default class Trends{
    constructor(word){
        this.keyword = word;

    }

    async getInterestOverTime(keyword){ 
        let info = []
        await interestOverTime({ keyword: keyword })
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
        await relatedQueries({ keyword: keyword })
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
        await relatedTopics({ keyword: keyword })
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

