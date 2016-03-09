'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano');

gulp.task('scripts', function () {
  // Future processing for scripts
});

gulp.task('styles', function () {
  gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'sass:watch']);
