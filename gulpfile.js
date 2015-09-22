// Base Gulp File
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    path = require('path'),
    notify = require('gulp-notify'),
    inlinesource = require('gulp-inline-source'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del');

// Task to compile SCSS
gulp.task('sass', function () {
  gulp.src('./scss/style.scss')
    .pipe(sass({
      errLogToConsole: false,
      paths: [ path.join(__dirname, 'scss', 'includes') ]
    })
    .on("error", notify.onError(function(error) {
      return "Failed to Compile SCSS: " + error.message;
    })))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(notify("SCSS Compiled Successfully :)"));
});

// Task to compile LESS
gulp.task('less', function () {
  gulp.src('./less/style.less')
    .pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ]
  })
  .on('error', function(err) {
    this.emit('end');
  }))
  .on("error", notify.onError(function(error) {
    return "Failed to Compile LESS: " + error.message;
  }))
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.reload({
    stream: true
  }))
  .pipe(notify("LESS Compiled Successfully :)"));
});

// Minify Images
gulp.task('imagemin', function(){
  return gulp.src('./img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('./dist/img'))
});

// BrowserSync Task (Live reload)
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
});

// Embed scripts, CSS or images inline (make sure to add an inline attribute to the linked files)
// Eg: <script src="default.js" inline></script>
// Will compile all inline within the html file (less http requests - woot!)
gulp.task('inlinesource', function () {
  return gulp.src('./*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist/'));
});


// Clean up
gulp.task('clean', function() {
  del('./dist');
})

// Gulp Watch Task
gulp.task('watch', ['browserSync'], function () {
   gulp.watch('scss/**/*', ['sass']),
   gulp.watch('less/**/*', ['less']);
});

// Gulp Tasks
gulp.task('default', ['watch']);
gulp.task('build', ['sass', 'less', 'inlinesource']);