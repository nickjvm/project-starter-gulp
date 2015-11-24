/*eslint-disable no-console */
var config = require('./config');

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var historyApiFallback  = require('connect-history-api-fallback');

var webserverTask = function() {
  gulp.src('public')
    .pipe(webserver({
        port: config.porg,
        livereload: {
            enable: true,
            filter: function(fileName) {
              if (fileName.match(/.map$/)) {
                // exclude all source maps from livereload
                return false;
              } else {
                return true;
              }
            },
        },
        directoryListing: false,
        open: false,
        middleware: [ historyApiFallback() ],
    }));

    console.log('server is up at port :' + config.port);

};

gulp.task('connect', webserverTask);
module.exports = webserverTask;
