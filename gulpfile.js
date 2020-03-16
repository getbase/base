const { watch, src, dest, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('cssnano');
const del = require('del');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

// Watch HTML Files
function html() {
  return src('./index.html')
    .pipe(browserSync.stream())
}

// Compile SCSS/SASS to CSS
function scss() {
  return src('./scss/index.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
    .pipe(browserSync.stream())
}

// SCSS Modules
function coreScss() {
  return src('./scss/core.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function typographyScss() {
  return src('./scss/typography.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function typographyHelpersScss() {
  return src('./scss/typography-helpers.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function codeScss() {
  return src('./scss/code.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function blockquotesScss() {
  return src('./scss/blockquotes.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function tablesScss() {
  return src('./scss/tables.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function containersScss() {
  return src('./scss/containers.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function gridScss() {
  return src('./scss/grid.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function layoutSpacersScss() {
  return src('./scss/layout-spacers.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function displayHelpersScss() {
  return src('./scss/display-helpers.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

// Clean Up (deleted `dist` folder)
function clean() {
  return del([
    './index.css',
    './core.css',
    './typography.css',
    './typography-helpers.css',
    './code.css',
    './blockquotes.css',
    './tables.css',
    './containers.css',
    './grid.css',
    './layout-spacers.css',
    './display-helpers.css'
  ]);
}

// Web Server / Live Reload
function server() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watch('./index.html', html);
  watch('./scss/**/*.scss', scss);
}


exports.clean = clean;
exports.compileScssModulesToCss = parallel(
  coreScss,
  typographyScss,
  typographyHelpersScss,
  codeScss,
  blockquotesScss,
  tablesScss,
  containersScss,
  gridScss,
  layoutSpacersScss,
  displayHelpersScss
);
exports.build = parallel(
  html,
  scss,
  coreScss,
  typographyScss,
  typographyHelpersScss,
  codeScss,
  blockquotesScss,
  tablesScss,
  containersScss,
  gridScss,
  layoutSpacersScss,
  displayHelpersScss
);
exports.default = parallel(
  html,
  scss,
  server
);