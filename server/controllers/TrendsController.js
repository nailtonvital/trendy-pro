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
    getText(){
        let jsonVar = {
            page: 1,
            results: [
                {
                    adult: false,
                    backdrop_path: '/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg',
                    id: 453395,
                    title: 'Doctor Strange in the Multiverse of Madness',
                    original_language: 'en',
                    original_title: 'Doctor Strange in the Multiverse of Madness',
                    overview: 'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
                    poster_path: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 5278.507,
                    release_date: '2022-05-04',
                    video: false,
                    vote_average: 7.525,
                    vote_count: 4328
                },
                {
                    adult: false,
                    backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
                    id: 616037,
                    title: 'Thor: Love and Thunder',
                    original_language: 'en',
                    original_title: 'Thor: Love and Thunder',
                    overview: 'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
                    poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 4414.917,
                    release_date: '2022-07-06',
                    video: false,
                    vote_average: 6.919,
                    vote_count: 707
                },
                {
                    adult: false,
                    backdrop_path: '/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg',
                    id: 507086,
                    title: 'Jurassic World Dominion',
                    original_language: 'en',
                    original_title: 'Jurassic World Dominion',
                    overview: 'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
                    poster_path: '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 2550.482,
                    release_date: '2022-06-01',
                    video: false,
                    vote_average: 6.573,
                    vote_count: 1096
                },
                {
                    adult: false,
                    backdrop_path: '/wUwizGzbTk5CTiKBnE4Pq1MONwD.jpg',
                    id: 560057,
                    title: 'The Sea Beast',
                    original_language: 'en',
                    original_title: 'The Sea Beast',
                    overview: 'The life of a legendary sea monster hunter is turned upside down when a young girl stows away on his ship.',
                    poster_path: '/9Zfv4Ap1e8eKOYnZPtYaWhLkk0d.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 190.11,
                    release_date: '2022-06-24',
                    video: false,
                    vote_average: 7.472,
                    vote_count: 145
                },
                {
                    adult: false,
                    backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
                    id: 438148,
                    title: 'Minions: The Rise of Gru',
                    original_language: 'en',
                    original_title: 'Minions: The Rise of Gru',
                    overview: 'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
                    poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 15259.056,
                    release_date: '2022-06-29',
                    video: false,
                    vote_average: 7.797,
                    vote_count: 286
                },
                {
                    adult: false,
                    backdrop_path: '/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg',
                    id: 361743,
                    title: 'Top Gun: Maverick',
                    original_language: 'en',
                    original_title: 'Top Gun: Maverick',
                    overview: 'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
                    poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1333.385,
                    release_date: '2022-05-24',
                    video: false,
                    vote_average: 8.364,
                    vote_count: 1538
                },
                {
                    adult: false,
                    backdrop_path: '/5PnypKiSj2efSPqThNjTXz8jwOg.jpg',
                    id: 759175,
                    title: 'The Princess',
                    original_language: 'en',
                    original_title: 'The Princess',
                    overview: 'A beautiful, strong-willed young royal refuses to wed the cruel sociopath to whom she is betrothed and is kidnapped and locked in a remote tower of her father’s castle. With her scorned, vindictive suitor intent on taking her father’s throne, the princess must protect her family and save the kingdom.',
                    poster_path: '/gt9s8TtZZ36TXF1CE1y19rSpOZu.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1085.116,
                    release_date: '2022-06-16',
                    video: false,
                    vote_average: 6.449,
                    vote_count: 99
                },
                {
                    adult: false,
                    backdrop_path: '/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg',
                    id: 338953,
                    title: 'Fantastic Beasts: The Secrets of Dumbledore',
                    original_language: 'en',
                    original_title: 'Fantastic Beasts: The Secrets of Dumbledore',
                    overview: "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
                    poster_path: '/8ZbybiGYe8XM4WGmGlhF0ec5R7u.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1872.801,
                    release_date: '2022-04-06',
                    video: false,
                    vote_average: 6.834,
                    vote_count: 2216
                },
                {
                    adult: false,
                    backdrop_path: '/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg',
                    id: 634649,
                    title: 'Spider-Man: No Way Home',
                    original_language: 'en',
                    original_title: 'Spider-Man: No Way Home',
                    overview: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
                    poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1809.583,
                    release_date: '2021-12-15',
                    video: false,
                    vote_average: 8.06,
                    vote_count: 14075
                },
                {
                    adult: false,
                    backdrop_path: '/3oTeRLZQ16HGmVXAvEnVh90PhS6.jpg',
                    id: 667739,
                    title: 'The Man from Toronto',
                    original_language: 'en',
                    original_title: 'The Man from Toronto',
                    overview: 'In a case of mistaken identity, the world’s deadliest assassin, known as the Man from Toronto, and a New York City screw-up are forced to team up after being confused for each other at an Airbnb.',
                    poster_path: '/uTCfTibqtk4f90cC59bLPMOmsfc.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1379.989,
                    release_date: '2022-06-24',
                    video: false,
                    vote_average: 6.177,
                    vote_count: 320
                },
                {
                    adult: false,
                    backdrop_path: '/wp3vpSWAIjKSEeYb8F5NSZfONqw.jpg',
                    id: 545611,
                    title: 'Everything Everywhere All at Once',
                    original_language: 'en',
                    original_title: 'Everything Everywhere All at Once',
                    overview: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
                    poster_path: '/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 320.67,
                    release_date: '2022-03-24',
                    video: false,
                    vote_average: 8.258,
                    vote_count: 943
                },
                {
                    adult: false,
                    backdrop_path: '/rQccrEIXtZr7KZHwcy9a3QFHGdQ.jpg',
                    id: 504827,
                    title: "The Bob's Burgers Movie",
                    original_language: 'en',
                    original_title: "The Bob's Burgers Movie",
                    overview: "When a ruptured water main creates an enormous sinkhole right in front of Bob's Burgers, it blocks the entrance indefinitely and ruins the Belchers’ plans for a successful summer. While Bob and Linda struggle to keep the business afloat, the kids try to solve a mystery that could save their family's restaurant. As the dangers mount, these underdogs help each other find hope and fight to get back behind the counter, where they belong.",
                    poster_path: '/31vliI2mopLlh5kUoWpJZ19cF8y.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 513.921,
                    release_date: '2022-05-26',
                    video: false,
                    vote_average: 7.4,
                    vote_count: 57
                },
                {
                    adult: false,
                    backdrop_path: '/6d1mHKcozT5AaZeI76ehJrBt0hr.jpg',
                    id: 864370,
                    title: 'Incantation',
                    original_language: 'zh',
                    original_title: '咒',
                    overview: "Inspired by a true story of a family who believed they were possessed by spirits, this film follows a woman who must protect her child from a curse.  WARNING: This is a cursed video, it might contain certain risks to watch ; For those who dares to follow, please solve the puzzle of my daughter's curse with me .",
                    poster_path: '/6zltP23zLGPogsHZUazSrrwNuKs.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 112.49,
                    release_date: '2022-03-18',
                    video: false,
                    vote_average: 7.786,
                    vote_count: 49
                },
                {
                    adult: false,
                    backdrop_path: '/IYUD7rAIXzBM91TT3Z5fILUS7n.jpg',
                    id: 414906,
                    title: 'The Batman',
                    original_language: 'en',
                    original_title: 'The Batman',
                    overview: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
                    poster_path: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 981.218,
                    release_date: '2022-03-01',
                    video: false,
                    vote_average: 7.763,
                    vote_count: 5513
                },
                {
                    adult: false,
                    backdrop_path: '/fqw8nJLPRgKRyFSDC0xBsC06NGC.jpg',
                    id: 639933,
                    title: 'The Northman',
                    original_language: 'en',
                    original_title: 'The Northman',
                    overview: "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
                    poster_path: '/8p9zXB7M78nZpm215zHfqpknMeM.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1260.173,
                    release_date: '2022-04-07',
                    video: false,
                    vote_average: 7.221,
                    vote_count: 1834
                },
                {
                    adult: false,
                    backdrop_path: '/gG9fTyDL03fiKnOpf2tr01sncnt.jpg',
                    id: 526896,
                    title: 'Morbius',
                    original_language: 'en',
                    original_title: 'Morbius',
                    overview: 'Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.',
                    poster_path: '/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1471.53,
                    release_date: '2022-03-30',
                    video: false,
                    vote_average: 6.437,
                    vote_count: 2030
                },
                {
                    adult: false,
                    backdrop_path: '/tqUD26YGjKmFqOJAgbNBah1gX0N.jpg',
                    id: 718789,
                    title: 'Lightyear',
                    original_language: 'en',
                    original_title: 'Lightyear',
                    overview: 'Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.',
                    poster_path: '/vpILbP9eOQEtdQgl4vgjZUNY07r.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1382.818,
                    release_date: '2022-06-15',
                    video: false,
                    vote_average: 6.999,
                    vote_count: 453
                },
                {
                    adult: false,
                    backdrop_path: '/h6XfgbzQEV4sitsIVY63pawLI0s.jpg',
                    id: 613093,
                    title: 'Valley of the Dead',
                    original_language: 'es',
                    original_title: 'Malnazidos',
                    overview: "They're soldiers on different sides of the war. But when the dead come back to life, the only side they want to be on is the one that survives.",
                    poster_path: '/avokvOwhjVR9GgISsSSgb2A343G.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 46.164,
                    release_date: '2022-03-11',
                    video: false,
                    vote_average: 6.688,
                    vote_count: 24
                },
                {
                    adult: false,
                    backdrop_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',
                    id: 675353,
                    title: 'Sonic the Hedgehog 2',
                    original_language: 'en',
                    original_title: 'Sonic the Hedgehog 2',
                    overview: 'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',
                    poster_path: '/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 1876.468,
                    release_date: '2022-03-30',
                    video: false,
                    vote_average: 7.693,
                    vote_count: 2451
                },
                {
                    adult: false,
                    backdrop_path: '/rLo9T9jEg67UZPq3midjLnTUYYi.jpg',
                    id: 614934,
                    title: 'Elvis',
                    original_language: 'en',
                    original_title: 'Elvis',
                    overview: 'The life story of Elvis Presley as seen through the complicated relationship with his enigmatic manager, Colonel Tom Parker.',
                    poster_path: '/b6UjAGzPzOnXhPIASUaSX1BUbXD.jpg',
                    media_type: 'movie',
                    genre_ids: [Array],
                    popularity: 220.958,
                    release_date: '2022-06-22',
                    video: false,
                    vote_average: 7.716,
                    vote_count: 414
                }
            ],
            total_pages: 1000,
            total_results: 20000
        }
        const obj = JSON.stringify(jsonVar); 
        return(obj)
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

