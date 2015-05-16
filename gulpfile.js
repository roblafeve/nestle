var gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    jade         = require('gulp-jade'),
    autoprefixer = require('gulp-autoprefixer'),
    server       = require('gulp-server-livereload'),
    concat       = require('gulp-concat');


// Styles

gulp.task('styles', function(){
  return gulp.src('test/src/**/*.styl')
    .pipe(stylus())
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('test/out/'));
});


// Jade

gulp.task('jade', function(){
  return gulp.src('test/src/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('test/out/'));
});


// Watch

gulp.task('watch', function() {
  gulp.watch(['test/src/**/*.styl', 'test/src/**/*.jade'], ['styles', 'jade']);
});


// Server

gulp.task('server', function() {
  gulp.src('test/out/')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


// Default

gulp.task('default', ['styles', 'watch', 'server']);
