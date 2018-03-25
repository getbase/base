'use strict';

let browserSync = require('browser-sync').create();
let path = require('path');
let del = require('del');
let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let notify = require('gulp-notify');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let less = require('gulp-less');
let runSequence = require('run-sequence');

// Task to compile SCSS
gulp.task('sass', () => {
  return gulp.src('./scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested',
      errLogToConsole: false,
      paths: [path.join(__dirname, 'scss', 'includes')]
    })
      .on("error", notify.onError(error => {
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
gulp.task('less', () => {
  return gulp.src('./less/index.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    })
    .on("error", notify.onError(error => {
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
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Gulp Watch Task
gulp.task('watch', ['browserSync'], () => {
  gulp.watch('./scss/**/*', ['sass']);
  gulp.watch('./less/**/*', ['less']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

// Gulp Clean Up Task
gulp.task('clean', () => {
  return del('./css/');
});

// Gulp Default Task
gulp.task('default', ['watch']);

// Gulp Build Task
gulp.task('build', callback => {
  runSequence('clean', 'sass', callback);
});