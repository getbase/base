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

function headingsScss() {
  return src('./scss/headings.scss')
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

function codeScss() {
  return src('./scss/code.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function formsScss() {
  return src('./scss/forms.scss')
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

function horizontalSpacersScss() {
  return src('./scss/horizontal-spacers.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function verticalSpacersScss() {
  return src('./scss/vertical-spacers.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function spacersScss() {
  return src('./scss/spacers.scss')
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

function displayHelpersScss() {
  return src('./scss/display-helpers.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function flexHelpersScss() {
  return src('./scss/flex-helpers.scss')
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
    './headings.css',
    './tables.css',
    './code.css',
    './containers.css',
    './grid.css',
    './forms.css',
    './horizontal-spacers.css',
    './vertical-spacers.css',
    './spacers.css',
    './typography-helpers.css',
    './display-helpers.css',
    './flex-helpers.css'
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
  headingsScss,
  tablesScss,
  codeScss,
  formsScss,
  containersScss,
  gridScss,
  horizontalSpacersScss,
  verticalSpacersScss,
  spacersScss,
  typographyHelpersScss,
  displayHelpersScss,
  flexHelpersScss
);
exports.build = parallel(
  html,
  scss,
  coreScss,
  typographyScss,
  headingsScss,
  tablesScss,
  codeScss,
  formsScss,
  containersScss,
  gridScss,
  horizontalSpacersScss,
  verticalSpacersScss,
  spacersScss,
  typographyHelpersScss,
  displayHelpersScss,
  flexHelpersScss
);
exports.default = parallel(
  html,
  scss,
  server
);