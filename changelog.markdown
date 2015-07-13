# Base 2 Change Log

## [2.3.1] - 2015-07-13
### Base V2.3.1
- Fixed custom select (.select) issue in IE9+
- Version bump on package.json 
- Version bump on style.less/style.scss


## [2.3.0] - 2015-07-12
### Base V2.3.0
- Moved custom buttons and custom select from _helpers.less/_helpers.scss into _assets.less/_assets.scss
- Version bump on package.json 
- Version bump on style.less/style.scss
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
- Minor version bump on the style.less file
- Minor updates to changelog


## [2.1.3] - 2015-07-07
### Base V2.1.3
- Added .svg-fill() mixin for applying a custom fill colour to SVG images (embeds images within CSS too!) - See:
  http://zslabs.com/articles/svg-background-fill/#update-2
- Minor version bump on the style.less file


## [2.1.2] - 2015-06-12
### Base V2.1.2
- Added container-full for tablet, desktop and HD (_grid.less and _minimal-grid.less)
- Updated container widths for desktop and HD responsive breakpoints
- Minor version bump on the style.less file


## [2.1.1] - 2015-06-10
### Base V2.1.1
- Added transition delay mixin
- Minor version bump on the style.less file


## [2.1.0] - 2015-06-05
### Base V2.1.0
- Added transition mixin
- Added default font family to headings
- Updated variables to include font family for blockquotes
- Added default blockquote font family from variable
- Updated _animations.less
- Minor version bump on the style.less file


## [2.0.9] - 2015-06-03
### Base V2.0.9
- Updated minimal grid
- Changed default grid from minimal to full featured grid
- Minor version bump on the style.less file


## [2.0.8] - 2015-06-02
### Base V2.0.8
- Added push and pull resets for tablet, desktop and hd devices
- Minor version bump on the style.less file


## [2.0.7] - 2015-05-27
### Base V2.0.7
- Added minimal grid version
- Minor updates to readme.markdown and package.json (links)
- Minor version bump on the style.less file


## [2.0.6] - 2015-05-21
### Base V2.0.6
- Cleaned up animations
- Minor version bump on the style.less file


## [2.0.5] - 2015-04-18
### Base V2.0.5
- Added animation helper
- Added more zoom animations
- Added new .none helper (display: none;)
- Minor version bump on the style.less file


## [2.0.4] - 2015-04-17
### Base V2.0.4
- Added animation-delay mixin
- Removed default font of 'Montserrat' in _variables.less
- Minor version bump on the style.less file


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
- Minor version bump on the style.less file


## [2.0.2] - 2015-03-27
### Base V2.0.2
- Minor updates on readme
- Minor version bump on the LESS file
- Updated package.json with latest dependencies


## [2.0.1] - 2015-03-27
### Base V2.0.1
- Added .travis.yml file for build tests
- Added build test to gulp file
- Updated readme with links to the old Base (v1) and added travis build
- Minor version bump on the LESS file


## [2.0.0] - 2015-03-25
### Base V2.0.0
- Re-wrote grid to be mobile-first and added HD viewport
- Dropped support for IE7
- Added gulpfile.js for compiling LESS
- Minor updates on Favicons
- Updated index.html template with latest jQuery