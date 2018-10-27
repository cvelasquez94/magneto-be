require('require-dir')('./gulp');
const gulp = require('gulp');

gulp.task('test', ['eslint']);
