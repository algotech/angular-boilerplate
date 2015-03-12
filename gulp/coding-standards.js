'use strict';

var gulp   = require('gulp');
var paths = gulp.paths;

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src([
    paths.src + '/**/*.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

var jscs = require('gulp-jscs');

gulp.task('code-style', function() {
  return gulp.src([
    paths.src + '/**/*.js'
  ])
    .pipe(jscs());
});

gulp.task('coding-standards', ['lint', 'code-style']);
