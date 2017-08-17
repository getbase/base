'use strict';

var browserSync = require('browser-sync').create(),
    path = require('path'),
    del = require('del'),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    runSequence = require('run-sequence');

// Task to compile SCSS
gulp.task('sass', function () {
  return gulp.src('./scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested',
      errLogToConsole: false,
      paths: [path.join(__dirname, 'scss', 'includes')]
    })
      .on("error", notify.onError(function (error) {
        return "Failed to Compile SCSS: " + error.message;
      })))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())
    .pipe(notify({
      message: "SCSS Compiled Successfully :)",
      onLast: true
    }));
});

// Task to compile LESS
gulp.task('less', function () {
  return gulp.src('./less/styles.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    })
    .on("error", notify.onError(function(error) {
      return "Failed to Compile LESS: " + error.message;
    })))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())
    .pipe(notify({
      message: "LESS Compiled Successfully :)",
      onLast: true
    }));
});

// BrowserSync Task (Live reload)
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Gulp Watch Task
gulp.task('watch', ['browserSync'], function () {
  gulp.watch('./scss/**/*', ['sass']);
  gulp.watch('./less/**/*', ['less']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

// Gulp Clean Up Task
gulp.task('clean', function () {
  return del('./css/');
});

// Gulp Default Task
gulp.task('default', ['watch']);

// Gulp Build Task
gulp.task('build', function (callback) {
  runSequence('clean', 'sass', callback);
});
