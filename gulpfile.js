//require('babel-core/register');

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

var build = require('./scripts/build');
var scss = require('./scripts/scss');
var watch = require('./scripts/watch');
var connect = require('./scripts/connect');

gulp.task('start-dev', function(cb) {
	gulpSequence('build','scss','watch', 'connect', cb);
});
