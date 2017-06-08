'use strict';

var browserSync = require('browser-sync').create(),
    del = require('del'),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    cssBase64 = require('gulp-css-base64'),
    imagemin = require('gulp-imagemin'),
    inlinesource = require('gulp-inline-source'),
    notify = require('gulp-notify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    runSequence = require('run-sequence');

// Task to compile SCSS
gulp.task('sass', function () {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed', // Accepted values: nested, expanded, compact, compressed
      errLogToConsole: false,
      paths: [path.join(__dirname, 'scss', 'includes')]
    })
      .on("error", notify.onError(function (error) {
        return "Failed to Compile SCSS: " + error.message;
      })))
    .pipe(cssBase64())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css/'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream())
    .pipe(notify({
      message: "SCSS Compiled Successfully :)",
      onLast: true
    }));
});

// Task to Minify JS
gulp.task('jsmin', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

// Minify Images
gulp.task('imagemin', function () {
  return gulp.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that run through imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('./dist/img/'));
});

// BrowserSync Task (Live reload)
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
});

// Gulp Inline Source Task
// Embed scripts, CSS or images inline (make sure to add an inline attribute to the linked files)
// Eg: <script src="default.js" inline></script>
// Will compile all inline within the html file (less http requests - woot!)
gulp.task('inlinesource', function () {
  return gulp.src('./src/**/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist/'));
});

// Gulp Watch Task
gulp.task('watch', ['browserSync'], function () {
  gulp.watch('./src/scss/**/*', ['sass']);
  gulp.watch('./src/**/*.html').on('change', browserSync.reload);
});

// Gulp Clean Up Task
gulp.task('clean', function () {
  return del('dist');
});

// Gulp Default Task
gulp.task('default', ['watch']);

// Gulp Build Task
gulp.task('build', function (callback) {
  runSequence('clean', 'sass', 'imagemin', 'jsmin', 'inlinesource', callback);
});
