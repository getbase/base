# [Base](http://getbase.org)

## A Rock Solid, Responsive CSS Framework built to work on all devices big and small.
Lightweight and minimal code. Spend less time overriding styles and focus more time on creating beautiful website applications.

[![Travis Build Status][travis-img]][travis] [![David Dependencies Status][david-img]][david]

[travis-img]:   https://img.shields.io/travis/matthewhartman/base.svg?branch=master
[david-img]:    https://img.shields.io/david/dev/matthewhartman/base.svg?branch=master&label=dependencies
[travis]:       https://travis-ci.org/matthewhartman/base
[david]:        https://david-dm.org/matthewhartman/base?type=dev

## Getting Started
...

## Installation
If you are creating a new project from scratch, it is highly recommended you download the [base starter](https://github.com/matthewhartman/base-starter) template.

Or you can clone the starter-template directly:

    git clone https://github.com/matthewhartman/base-starter.git && cd base-starter

    npm install && npm start

Alternatively, if you have an existing project, simply install base using [NPM](https://www.npmjs.com/):

    npm install --save getbase

Once you have Base installed, you can then include it into your website with one of the following methods:
* Reference the CSS file directly into your website:

    <link rel="stylesheet" href="node_modules/getbase/css/styles.css">

* Via a SCSS file:

    @import "node_modules/getbase/scss/base";

    // Your website styles

    @import "node_modules/getbase/scss/base/_helpers";


* Via a LESS file:

    @import "node_modules/getbase/less/base";

    // Your website styles

    @import "node_modules/getbase/less/base/_helpers";

Want to know how what's under the hood? - head over to the [docs](http://getbase.org/docs/) to learn more.

* * *

## Support
* IE8+ and all other modern browsers.
* Please, specify browsers you need to support in `package.json` according to [browserslist docs](https://github.com/ai/browserslist#queries).

* * *

## Thanks
- [base_css-rails](https://github.com/rkrdo/base_css-rails) - Gem that adds the Base framework by Ricardo Cruz
- [HTML5 boilerplate](https://html5boilerplate.com/) for the base HTML template
- Daniel Eden for the CSS3 animations - [animate.css](http://daneden.github.io/animate.css/)
- Nicolas Gallagher [@necolas](https://twitter.com/necolas) for normalize.css and micro clearfix
- Tristan McNab for adding bower support

## License
[MIT Open Source](https://opensource.org/licenses/MIT)

* * *

Base was built by Matthew Hartman [(@matthewhartmans)](http://twitter.com/matthewhartmans) - a passionate web developer based in Melbourne, Australia.