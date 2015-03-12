module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            'src/stringfilter.js',
            'test/*.js'
        ],
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        preprocessors: {
            'src/stringfilter.js': ['coverage']
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },
        plugins: [
            'karma-cli',
            'karma-coverage',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    });
};