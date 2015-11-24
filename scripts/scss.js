/*eslint-disable no-console */
var config = require('./config');

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var scssTask = function() {
    console.log('starting scss...');
    return gulp.src(config.root.src + config.tasks.scss.src + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(config.tasks.scss.autoprefixer))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.root.dest + config.tasks.scss.dest));
};


gulp.task('scss', scssTask);
module.exports = scssTask;
