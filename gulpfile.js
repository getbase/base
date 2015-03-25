var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    path = require('path'),
    notify = require('gulp-notify');

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

gulp.task('watch', function () {
   gulp.watch('less/**/*', ['less']);
});

gulp.task('default', ['watch']);