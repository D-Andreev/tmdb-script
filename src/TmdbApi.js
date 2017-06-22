'use strict';

const request = require('request');
const Logger = require('./Logger');

const ERR_STATUS = 34;

let instance = null;

class TmdbApi {
    _getUrl(path) {
        return `${this.baseUrl}${path.join('/')}?api_key=${this.apiKey}&language=en-US`;
    }

    constructor(apiKey) {
        if (!instance) instance = this;

        this.baseUrl = 'http://api.themoviedb.org/3/';
        this.apiKey = apiKey;

        return instance;
    }

    getLatestId(done) {
        let path = ['movie', 'latest'];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (!body.hasOwnProperty('id') || !body.id) {
                return done(new Error('Invalid latest id'), body);
            }

            body.id = parseInt(body.id, 10);
            if (!body.id) return done(new Error('Could not parse int id'), body.id);

            done(null, body.id);
        });
    }

    getMovieDetails(id, done) {
        if (!id) return done(new Error('Invalid movie id'));
        let path = ['movie', id];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
                return done(null);
            }

            if (!body.hasOwnProperty('id') || !body.id) {
                return done(new Error('Invalid response for movie'), body);
            }

            done(null, body);
        });
    }

    getMovieImages(id, done) {
        if (!id) return done(new Error('Invalid movie id'));
        let path = ['movie', id, 'images'];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
                return done(null);
            }

            if (!body.hasOwnProperty('id') || !body.id) {
                return done(new Error('Invalid response for movie images'), body);
            }

            done(null, body);
        });
    }

    getMovieVideos(id, done) {
        if (!id) return done(new Error('Invalid movie id'));
        let path = ['movie', id, 'videos'];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
                return done(null);
            }

            if (!body.hasOwnProperty('id') || !body.id) {
                return done(new Error('Invalid response for movie videos'), body);
            }

            done(null, body);
        });
    }

    getMovieKeywords(id, done) {
        if (!id) return done(new Error('Invalid movie id'));
        let path = ['movie', id, 'keywords'];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
                return done(null);
            }

            if (!body.hasOwnProperty('id') || !body.id) {
                return done(new Error('Invalid response for movie keywords'), body);
            }

            done(null, body);
        });
    }

    getMovieSimilar(id, done) {
        if (!id) return done(new Error('Invalid movie id'));
        let path = ['movie', id, 'similar'];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
                return done(null);
            }

            if (!body.hasOwnProperty('results') || !body.results) {
                return done(new Error('Invalid response for movie similar'), body);
            }

            done(null, body);
        });
    }

    getMovieRecommendations(id, done) {
        if (!id) return done(new Error('Invalid movie id'));
        let path = ['movie', id, 'recommendations'];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
                return done(null);
            }

            if (!body.hasOwnProperty('id') || !body.id) {
                return done(new Error('Invalid response for movie recommendations'), body);
            }

            done(null, body);
        });
    }

    getMovieCredits(id, done) {
        if (!id) return done(new Error('Invalid movie id'));
        let path = ['movie', id, 'credits'];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
                return done(null);
            }

            if (!body.hasOwnProperty('id') || !body.id) {
                return done(new Error('Invalid response for movie credits'), body);
            }

            done(null, body);
        });
    }

    getPersonDetails(id, done) {
        if (!id) return done(new Error('Invalid person id'));
        let path = ['person', id];
        request(this._getUrl(path), (err, response) => {
            if (err) return done(err);
            let body;
            try {
                body = JSON.parse(response.body);
            } catch (e) {
                return done(err);
            }

            if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
                return done(null);
            }

            if (!body.hasOwnProperty('id') || !body.id) {
                return done(new Error('Invalid response for person'), body);
            }

            done(null, body);
        });
    }
}

module.exports = TmdbApi;
