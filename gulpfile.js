'use strict';

let browserSync = require('browser-sync').create();
let path = require('path');
let del = require('del');
let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let cache = require('gulp-cache');
let cssBase64 = require('gulp-css-base64');
let imagemin = require('gulp-imagemin');
let inlinesource = require('gulp-inline-source');
let notify = require('gulp-notify');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');
let runSequence = require('run-sequence');

// Compile SCSS
gulp.task('sass', () => {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested',
      errLogToConsole: false,
      paths: [path.join(__dirname, 'scss', 'includes')]
    })
      .on("error", notify.onError(error => {
        return "Failed to Compile SCSS: " + error.message;
      })))
    .pipe(cssBase64())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css/'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())
    .pipe(notify({
      message: "SCSS Compiled Successfully :)",
      onLast: true
    }));
});

// Minify JS
gulp.task('jsmin', () => {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

// Minify Images
gulp.task('imagemin', () => {
  return gulp.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that run through imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('./img/'));
});

// BrowserSync (Live Reload)
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
});

// Gulp Inline Source
// Embed scripts, CSS or images inline (make sure to add an inline attribute to the linked files)
// Eg: <script src="default.js" inline></script>
// Will compile all inline within the html file (less http requests - woot!)
gulp.task('inlinesource', () => {
  return gulp.src('./src/**/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./'));
});

// Gulp Watch
gulp.task('watch', ['browserSync'], () => {
  gulp.watch('./src/scss/**/*', ['sass']);
  gulp.watch('./src/**/*.html').on('change', browserSync.reload);
});

// Gulp Clean Up
gulp.task('clean', () => {
  del('./css');
  del('./docs');
  del('./js');
  del('./img');
  del('./index.html');
});

// Gulp Default
gulp.task('default', ['watch']);

// Gulp Build Task
gulp.task('build', callback => {
  runSequence('clean', 'sass', 'imagemin', 'jsmin', 'inlinesource', callback);
});