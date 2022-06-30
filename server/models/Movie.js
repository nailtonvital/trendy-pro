'use strict';
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id: Number,
    title: {type:String, required:true},
    originalTitle: String,
    image: String,
    overview: String,
    originalLanguage: String,
    releaseDate: String,
    voteAverage: Number,
    runTime: Number,
    genres: String,
    relatedTopics: [{
        geo: String,
        date: {type:String, default: new Date()},
        value: Number,
    }],
    relatedQueries: [{
        query: String,
        value: Number,
    }],
    interestOverTime: [{
        startTime: String,
        endTime: String,
        value: String,
    }]
});

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie

