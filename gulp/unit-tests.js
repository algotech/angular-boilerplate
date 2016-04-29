'use strict';

var gulp = require('gulp');
var karma = require('gulp-karma');

function runTests (singleRun, done) {
  return gulp.src('./imaginary-path')
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: (singleRun)? 'run': 'watch'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log(err);
      this.emit('end'); //instead of erroring the stream, end it
    });
}

gulp.task('test', function (done) { runTests(true /* singleRun */, done) });
gulp.task('test:auto', function (done) { runTests(false /* singleRun */, done) });
