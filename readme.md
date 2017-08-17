# [Base](http://getbase.org)

## A Rock Solid, Responsive CSS Framework built to work on all devices big and small.
Lightweight and minimal code. Spend less time overriding styles and focus more time on creating beautiful website applications.

[![Travis Build Status][travis-img]][travis] [![David Dependencies Status][david-img]][david]

[travis-img]:   https://img.shields.io/travis/matthewhartman/base.svg?branch=master
[david-img]:    https://img.shields.io/david/dev/matthewhartman/base.svg?branch=master&label=dependencies
[travis]:       https://travis-ci.org/matthewhartman/base
[david]:        https://david-dm.org/matthewhartman/base?type=dev

## Getting Started
Whether you're building a new web application from scratch or creating a mobile-first, responsive website, Base is very easy to learn and use.

Before diving into Base, please make sure you have the following tools and basic knowledge:

* Good understanding of HTML and CSS
* A good code editor such as [Sublime Text Editor](http://www.sublimetext.com/)
* Latest installation of [Node and NPM](https://nodejs.org/en/)
* A calm and open mind :)

## Installation
If you are creating a new project from scratch, it is highly recommended you [download the base starter template](https://github.com/matthewhartman/base-starter).

Or you can clone the starter-template directly:

```bash
git clone https://github.com/matthewhartman/base-starter.git yourwebsite && cd yourwebsite && rm -rf .git
npm install && npm start
```

Alternatively, if you have an existing project, simply install base using [NPM](https://www.npmjs.com/):

```bash
npm install --save getbase
```

Once you have Base installed, you can include it into your website with one of the following methods:
### Reference the CSS file directly into your website:

  ```html
  <link rel="stylesheet" href="node_modules/getbase/css/styles.css">
  ```

### Import via SCSS file:

  ```scss
  @import "node_modules/getbase/scss/base";

  // Your website styles

  @import "node_modules/getbase/scss/base/_helpers";
  ```


### Import via LESS file:

  ```css
  @import "node_modules/getbase/less/base";

  /* Your website styles */

  @import "node_modules/getbase/less/base/_helpers";
  ```

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
