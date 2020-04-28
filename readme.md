# [Base](http://getbase.org)

### A Rock Solid, Responsive CSS Framework built to work on all devices big, small and in-between.

Lightweight and minimal code. Spend less time overriding styles and focus more time on creating beautiful website applications.

[![Travis Build Status][travis-img]][travis] [![David Dependencies Status][david-img]][david]

[travis-img]:   https://img.shields.io/travis/getbase/base.svg?branch=master
[david-img]:    https://img.shields.io/david/dev/getbase/base.svg?branch=master&label=dependencies
[travis]:       https://travis-ci.org/getbase/base
[david]:        https://david-dm.org/getbase/base?type=dev

* * *

## Table of contents

* [Overview](#overview)
* [Installation](#installation)
* [Documentation](#documentation)
* [Templates](#templates)
* [Support](#support)
* [Authors](#authors)
* [Credits](#credits)
* [License](#license)

* * *

## Overview

Base itself is a pretty thin CSS framework built on top of Normalize CSS. Include what you need on top of Base such as custom typography, custom grids, components and make it yours.

* * *

## Installation

If you are creating a new project from scratch, it is recommended that you [use the base starter](https://github.com/getbase/starter).

```bash
git clone https://github.com/getbase/starter.git \
new-website && cd new-website && rm -rf .git && \
npm install && npm start
```

For existing projects, simply install base using NPM.

```bash
npm install --save @getbase/base
```

Once you have Base installed, you can choose what to import and include your own custom styles.

#### CSS Import:

  ```css
  /* Import the entire Base Framework */
  @import url("https://unpkg.com/@getbase/base/index.css");

  /* OR import only what you need */
  @import url("https://unpkg.com/@getbase/base/css/core.css");
  @import url("https://unpkg.com/@getbase/base/css/grid.css");
  ```

#### SCSS Import:

  ```scss
  /* Import the entire Base Framework */
  @import "~@getbase/base/scss/index";

  /* OR import only what you need */
  @import "~getbase/base/scss/core";
  @import "~getbase/base/scss/grid";

  /* Your Other Styles */
  @import "main";
  ```

#### LESS Import:

  ```less
  /* Import the entire Base Framework */
  @import "~@getbase/base/less/index";

  /* OR import only what you need */
  @import "~getbase/base/less/core";
  @import "~getbase/base/less/grid";

  /* Your Other Styles */
  @import "main";
  ```

* * *

## Documentation

The best way to get started is to view the [Base Styleguide](#)

* * *

## Templates

There are a [collection of free templates built with Base](https://gumroad.com/getbase) which are available to download on Gumroad.

* * *

## Support

* IE10+ and all other modern browsers.
* Please specify browsers you need to support in `package.json` according to [browserslist docs](https://github.com/ai/browserslist#queries).

* * *

## Credits

* Thanks to [Nicolas Gallagher (@necolas)](https://github.com/necolas/) for (Normalize.css)[https://github.com/necolas/normalize.css/]

* * *

## Authors

#### Matthew Hartman

* [https://twitter.com/matthewhartmans](https://twitter.com/matthewhartmans)
* [https://github.com/matthewhartman](https://github.com/matthewhartman)

* * *

## License

Code released under the [MIT Open Source](https://opensource.org/licenses/MIT) license.