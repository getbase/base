var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    path = require('path'),
    notify = require('gulp-notify');

gulp.task('sass', function () {
  gulp.src('scss/style.scss')
    .pipe(sass({
      errLogToConsole: false,
      paths: [ path.join(__dirname, 'scss', 'includes') ]
    })
    .on("error", notify.onError(function(error) {
      return "Failed to Compile SCSS: " + error.message;
    })))
    .pipe(gulp.dest('./'))
    .pipe(notify("SCSS Compiled Successfully :)"));
});

gulp.task('less', function () {
  gulp.src('less/style.less')
    .pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ]
  })
  .on('error', function(err) {
    this.emit('end');
  }))
  .on("error", notify.onError(function(error) {
    return "Failed to Compile LESS: " + error.message;
  }))
  .pipe(gulp.dest('./'))
  .pipe(notify("LESS Compiled Successfully :)"));
});

gulp.task('build', function () {
  gulp.src('scss/style.scss')
  .pipe(gulp.dest('./'))
  gulp.src('less/style.less')
  .pipe(gulp.dest('./'))
});

gulp.task('watch', function () {
   gulp.watch('scss/**/*', ['sass']),
   gulp.watch('less/**/*', ['less']);
});

gulp.task('default', ['watch']);
gulp.task('build', ['less', 'sass']);