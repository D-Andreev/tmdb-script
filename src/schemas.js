'use strict';

const mongoose  = require('mongoose');


module.exports = {
    MovieSchema: new mongoose.Schema({
        adult: {type: String},
        backdrop_path: {type: String},
        belongs_to_collection: {type: Boolean},
        budget: {type: Number},
        genres: {type: Array},
        homepage: {type: String},
        id: {type: Number},
        imdb_id: {type: String},
        original_language: {type: String},
        original_title: {type: String},
        overview: {type: String},
        popularity: {type: Number},
        poster_path: {type: String},
        production_companies: {type: Array},
        production_countries: {type: Array},
        release_date: {type: Date},
        revenue: {type: Number},
        runtime: {type: Number},
        spoken_languages: {type: Array},
        status: {type: String},
        tagline: {type: String},
        title: {type: String},
        video: {type: Boolean},
        vote_average: {type: Number},
        vote_count: {type: Number},
        rating: {type: Number},
        keywords: {type: Array, default: []},
        images: {type: Array, default: []},
        similar: {type: Array, default: []},
        videos: {type: Array, default: []},
        reviews: {type: Array, default: []},
        credits: {type: Object, default: {}}
    }),
    PersonSchema: new mongoose.Schema({
        'adult': {type: String},
        'also_known_as': {type: String},
        'biography': {type: String},
        'birthday': {type: Date},
        'deathday': {type: Date, default: null},
        'gender': {type: Number},
        'homepage': {type: String},
        'id': {type: Number},
        'imdb_id': {type: String},
        'name': {type: String},
        'place_of_birth': {type: String},
        'popularity': {type: Number},
        'profile_path': {type: String},
        'known_for': {type: Array, default: []}
    })
};
