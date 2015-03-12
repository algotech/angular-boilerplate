'use strict';

var gulp   = require('gulp');

gulp.task(
  'ci',
  ['coding-standards', 'test', 'protractor']
);
