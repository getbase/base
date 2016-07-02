# Base 2 Change Log


## [3.1.5] - 2016-07-02
### Base V3.1.5
- Fixed IE bug with placeholder color override
- Version bump for style.scss, package.json and bower.json


## [3.1.4] - 2016-07-02
### Base V3.1.4
- Removed rounded corners on buttons and inputs for Safari
- Corrected .row-m, .row-l, .row-xl bug in grid.scss
- Version bump for style.scss, package.json and bower.json


## [3.1.3] - 2016-06-18
### Base V3.1.3
- Updated animate mixin to animation
- Updated .animate and .animate-delay helpers to animation and animation-delay
- Added arrow mixin
- Version bump for style.scss, package.json and bower.json


## [3.1.2] - 2016-06-17
### Base V3.1.2
- Updated styles.scss
- Version bump for style.scss, package.json and bower.json


## [3.1.1] - 2016-06-17
### Base V3.1.1
- Cleaned up styles.scss
- Removed overflow hidden on pretty select (.select)
- Version bump for style.scss, package.json and bower.json


## [3.1.0] - 2016-06-17
### Base V3.1.0
- Cleaned up vendor prefixes on .button
- Added variables to custom select
- Cleaned up font-weight variables
- Added flex helpers for medium, large and extra large devices
- Added clearfix for medium, large and extra large devices
- Removed Styleguide
- Minor update in SCSS structure
- Moved _helpers.scss into styles.scss
- Updated default jQuery version to 1.12.4
- Version bump for style.scss, package.json and bower.json


## [3.0.2] - 2016-05-21
### Base V3.0.2
- Minor update to variable names for consistency ($base-link-color-hover to $base-link-hover-color, $base-input-background-color-focus to $base-input-background-focus-color and $base-input-border-color-focus to $base-input-border-focus-color)
- Removed image position helpers img-left and img-right as grid can be used
- Fixed issue where buttons would have rounded corners on Safari and small clean up with vendor prefixes in _forms.scss
- Added clearfix rules to .row-m, .row-l, .row-xl
- Added push/pull classes for .push-1-2-xl, .pull-1-2-xl, .push-1-3-xl, .pull-1-3-xl, .push-2-3-xl, .pull-2-3-xl, .push-1-4-xl, .pull-1-4-xl, .push-3-4-xl, .pull-3-4-xl, .push-1-5-xl, .pull-1-5-xl, .push-2-5-xl, .pull-2-5-xl, .push-3-5-xl, .pull-3-5-xl, .push-4-5-xl, .pull-4-5-xl
- Version bump for style.scss, package.json and bower.json


## [3.0.1] - 2016-05-15
### Base V3.0.1
- Minor tweak to readme
- Version bump for style.scss, package.json and bower.json


## [3.0.0] - 2016-05-15
### Base V3.0.0
- Refactored base to use normalize v4.1.1
- Updated default jQuery version to 1.12.3
- Added more variables for general hover and focus states, form elements and more
- Updated default typography and headings
- Updated favicons
- Added new font-size helpers (.fs-1, .fs-2, .fs-3, .fs-4, .fs-5, .fs-6) which are based off the h1 - h6 font sizes respectively
- Added styleguide
- Refactored grid to use new names ( .col-# [mobile first], .col-#-m [medium devices], .col-#-l [large devices], .col-#-xl [hd devices] )
- Added new grid columns (1-2, 1-3, 2-3, 1-4, 3-4, 1-5, 2-5, 3-5, 4-5) for all devices
- Updated favicons
- Refactored and cleaned up mixins file
- Added gulp source maps for CSS
- Added gulp plugin to base64 encode SVG images
- Added clean task to gulpfile.js
- Version bump package.json and bower.json
- Updated travis.yml to use a more stable version of Node
- Updated readme and changelog
- Version bump for style.scss


## [2.8.3] - 2016-03-23
### Base V2.8.3
- Refactored custom select to be more accessible (focus state)
- Added new variables for field borders colours (standard and focus states) and new variable for field colour
- Minor cleanup in gulpfile.js
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.8.2] - 2016-03-05
### Base V2.8.2
- Updated package.json and published getbase to NPM package
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.8.1] - 2016-02-28
### Base V2.8.1
- Added position helpers for tablet, desktop and HD devices
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.8.0] - 2016-02-02
### Base V2.8.0
- Cleaned up duplicate variables in _variables.scss
- Updated .travis.tml file to use Node 4 LTS
- Added Autoprefixer to handle vendor prefixes
- Cleaned up _mixins.less/_mixins.scss as Autoprefixer handles vendor prefixing
- Cleaned up _animations.less/_animations.scss as Autoprefixer handles vendor prefixing
- Updated .img-responsive helper to .img-fluid
- Added new row helpers (.row-top-x and .row-bottom-x)
- Added !default to all variables to support overrides (_variables.scss)
- Version bump package.json and bower.json
- Version bump style.less/style.scss
- Minor update on .gitignore


## [2.7.2] - 2015-12-15
### Base V2.7.2
- Added new variable for gutter spacing for mobile, tablet, desktop and HD
- Minor update to .travis.yml file
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.7.1] - 2015-12-02
### Base V2.7.1
- Added input[number] to _forms.less/_forms.scss
- Removed Mozilla specific styling on input fields for Firefox
- Minor update to .travis.yml file
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.7.0] - 2015-12-01
### Base V2.7.0
- Fixed broken input[radio] and input[checkbox] styles
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.9] - 2015-11-30
### Base V2.6.9
- Removed .input helper in _forms.less/_forms.scss as there is already a .field helper which does the same
- Removed iOS styling on all input fields excluding input checkbox and radio
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.8] - 2015-11-20
### Base V2.6.8
- Added .flex helper in _helpers.less/_helpers.scss
- Added basic styling for `select` elements to be consistent with other form elements in _forms.less/_forms.scss
- Updated .svg-fill mixin to cater for no fill scenario (_mixins.less)
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.7] - 2015-11-18
### Base V2.6.7
- Added float helpers for tablet, desktop and HD devices in _helpers.less/_helpers.scss
- Removed _minimal-grid.less (general house cleaning)
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.6] - 2015-11-13
### Base V2.6.6
- Updated font-weight variables to memorable names in _variables.less/_variables.scss
- Updated .font-weight helpers to memorable names in _helpers.less/_helpers.scss
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.5] - 2015-11-12
### Base V2.6.5
- Added flexbox helpers to _helpers.less/_helpers.scss
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.4] - 2015-11-09
### Base V2.6.4
- Updated .no-select placement and removed misleading comment in _helpers.less/_helpers.scss
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.3] - 2015-11-09
### Base V2.6.3
- Updated grid reset helpers .no-col-tablet, .no-col-desktop, .no-col-hd, .no-col-print within _helpers.less/_helpers.scss
- Added new reset helper for select boxes (.no-select)
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.2] - 2015-11-08
### Base V2.6.2
- Minor typo fix on _animations.less/_animations.scss
- Moved .no-push, .no-pull helpers into _helpers.less/_helpers.scss
- Added .no-push-print, .no-pull-print into _helpers.less/_helpers.scss
- Added grid reset helpers .col-none-tablet, .col-none-desktop, .col-none-hd, .col-none-print within _helpers.less/_helpers.scss
- Version bump package.json and bower.json
- Version bump style.less/style.scss


## [2.6.1] - 2015-10-23
### Base V2.6.1
- Minor update on GulpJS file to cater for sub directories for build and watch tasks
- Version bump package.json
- Version bump style.less/style.scss


## [2.6.0] - 2015-10-23
### Base V2.6.0
- Updated readme.markdown
- Updated favicons
- Updated Google Analytics snippet
- Added bower.json file
- Minor tweak on .travis build script
- Version bump package.json
- Version bump style.less/style.scss


## [2.5.5] - 2015-10-21
### Base V2.5.5
- Updated naming conventions for print helpers
- Moved print helpers within _helpers.less/_helpers.scss
- Added new print helpers for text alignment and display types
- Version bump package.json
- Version bump style.less/style.scss


## [2.5.4] - 2015-10-21
### Base V2.5.4
- Updated display type helpers naming to be more consistent (tablet, desktop and HD)
- Added .fixed position helper to _helpers.less/_helpers.scss
- Version bump package.json
- Version bump style.less/style.scss


## [2.5.3] - 2015-10-19
### Base V2.5.3
- Fixed broken .svg-fill mixin in _mixins.less
- Version bump package.json
- Version bump style.less/style.scss


## [2.5.2] - 2015-10-18
### Base V2.5.2
- Added .fixed and .img-responsive helpers to _helpers.less/_helpers.scss
- Added watch for HTML changes in the GulpJS config for browserSync
- Version bump package.json
- Version bump style.less/style.scss


## [2.5.1] - 2015-10-16
### Base V2.5.1
- Added `input[password]` to _forms.less/_forms.scss
- Moved _helpers.less/_helpers.scss after the _grid includes
- Version bump package.json
- Version bump style.less/style.scss


## [2.5.0] - 2015-10-15
### Base V2.5.0
- Major updates on variable names for tablet, desktop and hd containers + breakpoints (_variables.less/_variables.scss)
- Major updates on column names, push and pull classes for tablet, desktop + hd (_grid.less/_grid.scss)
- Moved helpers from _grid.less/_grid.scss to _helpers.less/_helpers.scss
- Deleted _minimial-grid.less/_minimial-grid.scss
- Updated _helpers file with new tablet, desktop and hd helpers (fixes bug #51)
- Version bump package.json
- Version bump style.less/style.scss


## [2.4.2] - 2015-10-14
### Base V2.4.2
- Added `dist` folder
- Updated GulpJS file to distribute updated files (ready for production) to a `dist` folder
- Added Gulp task (movecss) to move compiled CSS into the `dist` folder
- Updated Gulp build task
- Minor updates on index.html: removed .no-js class and added reference to default.js (thanks to Michał Roszka for raising bug #50)
- Version bump package.json
- Version bump style.less/style.scss


## [2.4.1] - 2015-09-25
### Base V2.4.1
- Updated GulpJS file to include JS minification
- Added compiled JS files
- Added minified images
- Version bump package.json
- Version bump style.less/style.scss


## [2.4.0] - 2015-09-25
### Base V2.4.0
- Updated GulpJS file to include browserSync (live reload), image compression and an option to embed scripts, CSS or images inline
- Added `src` folder
- Moved LESS/SCSS, JS, images and index.html into `src` folder
- Added compiled LESS/SCSS file (style.css)
- Added compiled index.html file
- Version bump package.json
- Version bump style.less/style.scss


## [2.3.7] - 2015-09-01
### Base V2.3.7
- Removed input specific on placeholders in _forms.less/_forms.scss
- Version bump package.json
- Version bump style.less/style.scss


## [2.3.6] - 2015-08-19
### Base V2.3.6
- Added input[type=date] in _forms.less/_forms.scss
- Added new variable @base-placeholder-color for forms in _variables.less/_variables.scss
- Added styles for default placeholder colour in _forms.less/_forms.scss
- Version bump package.json
- Version bump style.less/style.scss


## [2.3.5] - 2015-08-01
### Base V2.3.5
- Fixed :active state on custom buttons in _assets.less/_assets.scss
- Version bump package.json
- Version bump style.less/style.scss
- Added minor comment to gulpfile.js


## [2.3.4] - 2015-07-15
### Base V2.3.4
- Added display helpers for _print.less/_print.scss
- Version bump package.json
- Version bump style.less/style.scss


## [2.3.3] - 2015-07-13
### Base V2.3.3
- Updated input[type=phone] to input[type=tel] in _forms.less/_forms.scss
- Version bump package.json
- Version bump style.less/style.scss


## [2.3.2] - 2015-07-13
### Base V2.3.2
- Updated tablet @media breakpoint
- Version bump package.json
- Version bump style.less/style.scss


## [2.3.1] - 2015-07-13
### Base V2.3.1
- Fixed custom select (.select) issue in IE9+
- Version bump package.json 
- Version bump style.less/style.scss


## [2.3.0] - 2015-07-12
### Base V2.3.0
- Moved custom buttons and custom select from _helpers.less/_helpers.scss into _assets.less/_assets.scss
- Version bump package.json
- Version bump style.less/style.scss
- Updated index.html template
- Removed ie.min.js and modernizr.min.js
- Updated to latest jQuery
- Minor updates to the changelog.markdown


## [2.2.0] - 2015-07-10
### Base V2.2.0
- Added SCSS Support!
- Updated Gulpfile to support SCSS compiling
- Minor updates on package.json
- Minor syntax updates on _mixins.less
- Minor version bump the style.less file
- Minor updates to changelog


## [2.1.3] - 2015-07-07
### Base V2.1.3
- Added .svg-fill() mixin for applying a custom fill colour to SVG images (embeds images within CSS too!) - See:
  http://zslabs.com/articles/svg-background-fill/#update-2
- Minor version bump the style.less file


## [2.1.2] - 2015-06-12
### Base V2.1.2
- Added container-full for tablet, desktop and HD (_grid.less and _minimal-grid.less)
- Updated container widths for desktop and HD responsive breakpoints
- Minor version bump the style.less file


## [2.1.1] - 2015-06-10
### Base V2.1.1
- Added transition delay mixin
- Minor version bump the style.less file


## [2.1.0] - 2015-06-05
### Base V2.1.0
- Added transition mixin
- Added default font family to headings
- Updated variables to include font family for blockquotes
- Added default blockquote font family from variable
- Updated _animations.less
- Minor version bump the style.less file


## [2.0.9] - 2015-06-03
### Base V2.0.9
- Updated minimal grid
- Changed default grid from minimal to full featured grid
- Minor version bump the style.less file


## [2.0.8] - 2015-06-02
### Base V2.0.8
- Added push and pull resets for tablet, desktop and hd devices
- Minor version bump the style.less file


## [2.0.7] - 2015-05-27
### Base V2.0.7
- Added minimal grid version
- Minor updates to readme.markdown and package.json (links)
- Minor version bump the style.less file


## [2.0.6] - 2015-05-21
### Base V2.0.6
- Cleaned up animations
- Minor version bump the style.less file


## [2.0.5] - 2015-04-18
### Base V2.0.5
- Added animation helper
- Added more zoom animations
- Added new .none helper (display: none;)
- Minor version bump the style.less file


## [2.0.4] - 2015-04-17
### Base V2.0.4
- Added animation-delay mixin
- Removed default font of 'Montserrat' in _variables.less
- Minor version bump the style.less file


## [2.0.3] - 2015-04-17
### Base V2.0.3
- Added animation mixins
- Added animations (thanks to [animate.css](http://daneden.github.io/animate.css/) by Daniel Eden)
  - animations/_bounce.less
  - animations/_fade.less
  - animations/_flip.less
  - animations/_zoom.less
- Added animation mixin
- Added animation helper for infinite loops
- Minor updates on readme
- Added changelog.markdown
- Removed .htaccess file
- Updated package.json to include a newer version of LESS (v3)
- Updated .gitignore to ignore node_modules
- Minor version bump the style.less file


## [2.0.2] - 2015-03-27
### Base V2.0.2
- Minor updates on readme
- Minor version bump the LESS file
- Updated package.json with latest dependencies


## [2.0.1] - 2015-03-27
### Base V2.0.1
- Added .travis.yml file for build tests
- Added build test to gulp file
- Updated readme with links to the old Base (v1) and added travis build
- Minor version bump the LESS file


## [2.0.0] - 2015-03-25
### Base V2.0.0
- Re-wrote grid to be mobile-first and added HD viewport
- Dropped support for IE7
- Added gulpfile.js for compiling LESS
- Minor updates on Favicons
- Updated index.html template with latest jQuery