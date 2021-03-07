const constants = require("karma/lib/constants");

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'webpack'],

        files: [
            {pattern: 'src/*.tests.js', watched: false}
        ],

        reporters: ['kjhtml'],

        preprocessors: {
            'src/*.tests.js': ['webpack']
        },

        webpack: {
            watch: true
        },

        port: 9876,

        logLevel: constants.LOG_ERROR,

        autoWatch: true,

        plugins: [
            "karma-jasmine",
            "karma-jasmine-html-reporter",
            "karma-webpack"
        ]
    });
};