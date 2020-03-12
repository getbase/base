const { watch, src, dest, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('cssnano');
const del = require('del');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Watch HTML Files
function html() {
  return src('./index.html')
    .pipe(browserSync.stream())
}

// Compile SCSS/SASS to CSS
function scssToCss() {
  return src('./scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(dest('./'))
    .pipe(browserSync.stream())
}

// Clean Up (deleted `dist` folder)
function clean() {
  return del(['./index.css', 'index.css.map']);
}

// Web Server / Live Reload
function server() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watch('./index.html', html);
  watch('./scss/**/*.scss', scssToCss);
}

exports.html = html;
exports.scssToCss = scssToCss;
exports.server = server;
exports.clean = clean;
exports.build = parallel(html, scssToCss);
exports.default = parallel(html, scssToCss, server);