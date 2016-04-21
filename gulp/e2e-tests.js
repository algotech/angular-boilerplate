'use strict';

var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var browserSync = require('browser-sync');
var paths = gulp.paths;

// Downloads the selenium webdriver
gulp.task('webdriver-update', protractor.webdriver_update);
gulp.task('webdriver-standalone', protractor.webdriver_standalone);

function runProtractor (done) {
  gulp.src('tests/e2e/**/*.js')
    .pipe(protractor({
      configFile: 'protractor.conf.js'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('error', function(e) { throw e; })
    .on('end', function() {
      done();
      browserSync.exit();
    });
}

gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
