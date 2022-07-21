import googleTrends from 'google-trends-api';

export default class Trends{
    constructor(word){
        this.getInterestOverTime(word)
        setTimeout(() => { this.getRelatedQueries(word) }, 500);
        setTimeout(() => { this.getRelatedTopics(word) }, 500);
    }

    async getInterestOverTime(keyword){ 
        
        const data = await googleTrends.interestOverTime({ keyword: keyword }).then((res) => JSON.parse(res).default.timelineData)

        return data
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

