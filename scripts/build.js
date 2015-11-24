var config = require('./config');

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var browserSync = require('browser-sync').create();

function compile(watch) {
  var bundler = watchify(browserify(config.root.src + config.tasks.build.src + '/index.js', { debug: true }).transform(babel));

  browserSync.init({
    proxy: 'localhost:8000',
    notify: false,
    options: {
        ignored: '*.map',
    },
    open: false,
  });

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.root.dest + config.tasks.build.dest))
      .pipe(browserSync.stream());
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('bundle', function() { return watch(); });

