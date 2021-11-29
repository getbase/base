const { watch, src, dest, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('cssnano');
const del = require('del');
const postcss = require('gulp-postcss');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpLess = require('gulp-less');

// Watch HTML Files
function html() {
  return src('./index.html')
    .pipe(browserSync.stream())
}

// Compile SCSS/SASS to CSS
function scss() {
  return src('./scss/index.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
    .pipe(browserSync.stream())
}

// SCSS Modules
function coreScss() {
  return src('./scss/core.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function typographyScss() {
  return src('./scss/typography.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function headingsScss() {
  return src('./scss/headings.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function tablesScss() {
  return src('./scss/tables.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function codeScss() {
  return src('./scss/code.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function formsScss() {
  return src('./scss/forms.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function containersScss() {
  return src('./scss/containers.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function gridScss() {
  return src('./scss/grid.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function horizontalSpacersScss() {
  return src('./scss/horizontal-spacers.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function verticalSpacersScss() {
  return src('./scss/vertical-spacers.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function spacersScss() {
  return src('./scss/spacers.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function displayHelpersScss() {
  return src('./scss/display-helpers.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function flexHelpersScss() {
  return src('./scss/flex-helpers.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function positionHelpersScss() {
  return src('./scss/position-helpers.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function typographyHelpersScss() {
  return src('./scss/typography-helpers.scss')
    .pipe(gulpSass())
    .on('error', gulpSass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

// Compile LESS to CSS
function less() {
  return src('./less/index.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
    .pipe(browserSync.stream())
}

// LESS Modules
function coreLess() {
  return src('./less/core.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function typographyLess() {
  return src('./less/typography.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function headingsLess() {
  return src('./less/headings.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function tablesLess() {
  return src('./less/tables.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function codeLess() {
  return src('./less/code.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function formsLess() {
  return src('./less/forms.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function containersLess() {
  return src('./less/containers.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function gridLess() {
  return src('./less/grid.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function horizontalSpacersLess() {
  return src('./less/horizontal-spacers.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function verticalSpacersLess() {
  return src('./less/vertical-spacers.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function spacersLess() {
  return src('./less/spacers.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function displayHelpersLess() {
  return src('./less/display-helpers.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function flexHelpersLess() {
  return src('./less/flex-helpers.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function positionHelpersLess() {
  return src('./less/position-helpers.less')
    .pipe(gulpLess())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('./'))
}

function typographyHelpersLess() {
  return src('./less/typography-helpers.less')
    .pipe(gulpLess())
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
    './display-helpers.css',
    './flex-helpers.css',
    './position-helpers.css',
    './typography-helpers.css'
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
  watch('./less/**/*.less', less);
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
  displayHelpersScss,
  flexHelpersScss,
  positionHelpersScss,
  typographyHelpersScss
);
exports.compileLessModulesToCss = parallel(
  coreLess,
  typographyLess,
  headingsLess,
  tablesLess,
  codeLess,
  formsLess,
  containersLess,
  gridLess,
  horizontalSpacersLess,
  verticalSpacersLess,
  spacersLess,
  displayHelpersLess,
  flexHelpersLess,
  positionHelpersLess,
  typographyHelpersLess
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
  displayHelpersScss,
  flexHelpersScss,
  positionHelpersScss,
  typographyHelpersScss
);
exports.default = parallel(
  html,
  less,
  scss,
  server
);