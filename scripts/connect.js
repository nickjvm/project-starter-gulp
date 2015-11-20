var gulp = require('gulp');
var connect = require('gulp-connect');

var port = 8000;
var connectTask = function() {
  connect.server({
    port: 8000,
    root: 'public',
  });
  console.log('server is up at port :' + port);
};

gulp.task('connect', connectTask);
module.exports = connectTask;
