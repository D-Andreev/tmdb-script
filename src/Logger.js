'use strict';

const pino = require('pino')();

module.exports = {
    info: function() {
        pino.info(arguments);
    },

    error: function() {
        pino.error(arguments);
    },

    warn: function() {
        pino.warn(arguments);
    }
};
