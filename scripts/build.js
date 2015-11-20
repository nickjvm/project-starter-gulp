var config = require('./config');

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var buildTask = function() {
	console.log('starting build...');
    return gulp.src(config.root.src + config.tasks.build.src + '/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.root.dest + config.tasks.build.dest));
};


gulp.task('build', buildTask);
module.exports = buildTask;
