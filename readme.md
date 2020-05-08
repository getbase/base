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
git clone https://github.com/getbase/starter.git --depth=1 \
new-website && cd new-website && rm -rf .git && \
npm install && npm start
```

For existing projects, simply install base using NPM.

```bash
npm install --save @getbase/base
```

Once you have Base installed, you can choose what to import and include your own custom styles.

#### HTML/CSS References:

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website / App </title>
    <!-- Base -->
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/index.css">
    <!-- Base Common -->
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/code.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/forms.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/tables.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/typography.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/headings.css">
    <!-- Add Your Website / App Stylesheet -->
    <!-- ... -->
    <!-- Add Additional Modules -->
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/containers.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/grid.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/horizontal-spacers.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/vertical-spacers.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/spacers.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/display-helpers.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/flex-helpers.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/position-helpers.css">
    <link rel="stylesheet" href="https://unpkg.com/@getbase/base/typography-helpers.css">
  </head>
  <body>
    <p>
      Base!
    </p>
  </body>
  </html>
  ```

#### CSS Import:

  ```css
  /* Import Base */
  @import url("https://unpkg.com/@getbase/base/index.css");

  /* Import Base Common */
  @import url("https://unpkg.com/@getbase/base/code.css");
  @import url("https://unpkg.com/@getbase/base/forms.css");
  @import url("https://unpkg.com/@getbase/base/tables.css");
  @import url("https://unpkg.com/@getbase/base/typography.css");
  @import url("https://unpkg.com/@getbase/base/headings.css");

  /* Add Your Website / App Styles */
  /* ... */

  /* Add Additional Modules */
  @import url("https://unpkg.com/@getbase/base/containers.css");
  @import url("https://unpkg.com/@getbase/base/grid.css");
  @import url("https://unpkg.com/@getbase/base/horizontal-spacers.css");
  @import url("https://unpkg.com/@getbase/base/vertical-spacers.css");
  @import url("https://unpkg.com/@getbase/base/spacers.css");
  @import url("https://unpkg.com/@getbase/base/display-helpers.css");
  @import url("https://unpkg.com/@getbase/base/flex-helpers.css");
  @import url("https://unpkg.com/@getbase/base/position-helpers.css");
  @import url("https://unpkg.com/@getbase/base/typography-helpers.css");
  ```

#### SCSS Import:

  ```scss
  /* Import Base */
  @import "~@getbase/base/scss/_mixins";
  @import "~@getbase/base/scss/core";
  
  /* Import Base Common */
  @import "~@getbase/base/scss/code";
  @import "~@getbase/base/scss/forms";
  @import "~@getbase/base/scss/tables";
  @import "~@getbase/base/scss/typography";
  @import "~@getbase/base/scss/headings";

  /* Add Your Website / App Styles */
  @import "main";

  // Add Additional Modules
  @import "~@getbase/base/scss/containers";
  @import "~@getbase/base/scss/grid";
  @import "~@getbase/base/scss/horizontal-spacers";
  @import "~@getbase/base/scss/vertical-spacers";
  @import "~@getbase/base/scss/spacers";
  @import "~@getbase/base/scss/typography-helpers";
  @import "~@getbase/base/scss/display-helpers";
  @import "~@getbase/base/scss/flex-helpers";
  @import "~@getbase/base/scss/position-helpers";
  ```

#### LESS Import:

  ```less
  /* Import Base */
  @import "~@getbase/base/less/_mixins";
  @import "~@getbase/base/less/core";
  
  /* Import Base Common */
  @import "~@getbase/base/less/code";
  @import "~@getbase/base/less/forms";
  @import "~@getbase/base/less/tables";
  @import "~@getbase/base/less/typography";
  @import "~@getbase/base/less/headings";

  /* Add Your Website / App Styles */
  @import "main";

  // Add Additional Modules
  @import "~@getbase/base/less/containers";
  @import "~@getbase/base/less/grid";
  @import "~@getbase/base/less/horizontal-spacers";
  @import "~@getbase/base/less/vertical-spacers";
  @import "~@getbase/base/less/spacers";
  @import "~@getbase/base/less/typography-helpers";
  @import "~@getbase/base/less/display-helpers";
  @import "~@getbase/base/less/flex-helpers";
  @import "~@getbase/base/less/position-helpers";
  ```

* * *

## Documentation

The best way to see what is inside Base is to view the [Styleguide](//unpkg.com/@getbase/base/index.html).

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

* [https://github.com/matthewhartman](https://github.com/matthewhartman)
* [https://twitter.com/matthewhartmans](https://twitter.com/matthewhartmans)

* * *

## License

Code released under the [MIT Open Source](https://opensource.org/licenses/MIT) license.