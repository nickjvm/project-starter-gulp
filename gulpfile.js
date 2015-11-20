//require('babel-core/register');

var gulp = require('gulp');

var watchTask = function () {
	return gulp.watch('./src/**/*.js', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running build...');
		require('./scripts/build')()
	});
}

gulp.task('watch', function() {
	console.log('watching');
	watchTask();
});

gulp.task('start-dev', function() {
	require('./scripts/build')();
	watchTask();
});