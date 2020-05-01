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
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/index.css">
    <!-- Base Common -->
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/code.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/forms.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/tables.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/typography.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/headings.css">
    <!-- Add Your Website / App Stylesheet -->
    <!-- ... -->
    <!-- Add Additional Modules -->
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/containers.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/grid.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/horizontal-spacers.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/vertical-spacers.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/spacers.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/display-helpers.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/flex-helpers.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/position-helpers.css">
    <link ref="stylesheet" href="https://unpkg.com/@getbase/base/typography-helpers.css">
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
  @import "core";

  /* Import Base Common */
  @import "code";
  @import "forms";
  @import "tables";
  @import "typography";
  @import "headings";

  /* Add Your Website / App Styles */
  @import "main";

  /* Add Additional Modules */
  @import "containers";
  @import "grid";
  @import "horizontal-spacers";
  @import "vertical-spacers";
  @import "spacers";
  @import "display-helpers";
  @import "flex-helpers";
  @import "position-helpers";
  @import "typography-helpers";
  ```

* * *

## Documentation

The best way to get started is to view the [Base Styleguide](https://getbase.org/styleguide)

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