#!/usr/bin/env node

'use strict';


const fs = require('fs');
const program = require('commander');
const TmdbScript = require('../src/TmdbScript');

program
    .version('1.0.0')
    .option('-c, --config', 'A file path to the json config file.')
    .option('-t, --transfer-data', 'Transfer data from temporary to main collections.')
    .parse(process.argv);

let {transferData, config} = program;
if (!config) throw new Error('Invalid config file path.');
config = program.args[0];
if (!fs.existsSync(config)) throw new Error('Invalid config file path.');

let configObject;
try {
    configObject = JSON.parse(fs.readFileSync(config));
} catch (e) {
    throw new Error('Invalid config.');
}

if (!configObject) throw new Error('Invalid config.');
if (!configObject.hasOwnProperty('tmdbApiKey') || !configObject.tmdbApiKey) throw new Error('Invalid tmdb api key passed.');
if (!configObject.hasOwnProperty('dbServer') || !configObject.dbServer) throw new Error('Invalid database server passed.');
if (!configObject.hasOwnProperty('mainMoviesCollection') || !configObject.mainMoviesCollection) {
    throw new Error('Invalid main movies collection passed.');
}
if (!configObject.hasOwnProperty('mainPeopleCollection') || !configObject.mainPeopleCollection) {
    throw new Error('Invalid main people collection passed.');
}
if (!configObject.hasOwnProperty('tmpMoviesCollection') || !configObject.tmpMoviesCollection) {
    throw new Error('Invalid temporary movies collection passed.');
}
if (!configObject.hasOwnProperty('tmpPeopleCollection') || !configObject.tmpPeopleCollection) {
    throw new Error('Invalid temporary people collection passed.');
}

TmdbScript.start(configObject, transferData);
