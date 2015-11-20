var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

var scssTask = function() {
    console.log('starting scss...');
    return gulp.src('./scss/global.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/client/'));
};


gulp.task('scss', scssTask);
module.exports = scssTask;
