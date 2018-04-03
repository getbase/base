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

* [Introduction](#introduction)
* [Installation](#installation)
* [Documentation](#documentation)
* [Demo](#demo)
* [Modules and Components](#modules-and-components)
* [Templates](#templates)
* [Support](#support)
* [Authors](#authors)
* [Credits](#credits)
* [License](#license)

* * *

## Introduction

Base itself is a very thin layer which includes Normalize.css and a few mixins to get you started.

You can then include what you need on top of Base such as typography, grids, individual components, etc and make it yours.

* * *

## Installation

If you are creating a new project from scratch, it is highly recommended that you [use base starter](https://github.com/getbase/starter).

```bash
git clone https://github.com/getbase/starter.git \
new-website && cd new-website && rm -rf .git
npm install && npm start
```

For existing projects, simply install base using NPM.

```bash
npm install --save @getbase/base
```

Once you have Base installed, you can build on top of it by including your own custom styles or add the [ready made modules](#modules-and-components)

#### CSS Import:

  ```css
  import url("https://cdn.rawgit.com/getbase/base/master/css/index.css");
  ```

#### SCSS Import:

  ```scss
  /* Import Base */
  @import "node_modules/@getbase/base/scss/index";
  /* Your Custom Website/App Styles */
  @import "main"
  ```


#### LESS Import:

  ```css
  /* Import Base */
  @import "node_modules/@getbase/base/scss/index";
  /* Your Custom Website/App Styles */
  @import "main"
  ```

* * *

## Documentation

Base includes the latest version of Normalize.css by default and includes a few Mixins to get you started.


### SCSS

#### Variables

| Variable | Default | Purpose |
| -------- | ------- | ------- |
| `$breakpoint-m` | `740px` | Breakpoint value for medium devices (tablet) |
| `$breakpoint-l` | `960px` | Breakpoint value for large devices (desktop) |
| `$breakpoint-x` | `1120px` | Breakpoint value for extra large devices (HD) |

#### Mixins

| Mixin | Purpose | Example | Outcome |
| ----- | ------- | ------- | ------- |
| `@include breakpoint(x)` | Apply a breakpoint for a particular device. Accepts values m, l and xl (m: medium, l: large, xl: extra large)  | `.box { @include breakpoint(m) { ... } }` | Applies styles to .box for medium devices and up |
| `@include background-alpha(hex, percentage)` | Applies a background color with opacity | `@include background-alpha(#000, 50%)` | Applies a background color of black with opacity set to 50% |
| `@include animation(time)` | Applies animation speed | `@include animation(2s)` | Animation will run for 2 seconds |

### LESS

#### Variables

| Variable | Default | Purpose |
| -------- | ------- | ------- |
| `@breakpoint-m` | `740px` | Breakpoint value for medium devices (tablet) |
| `@breakpoint-l` | `960px` | Breakpoint value for large devices (desktop) |
| `@breakpoint-x` | `1120px` | Breakpoint value for extra large devices (HD) |

#### Mixins

| Mixin | Purpose | Example | Outcome |
| ----- | ------- | ------- | ------- |
| `.background-alpha(hex, percentage)` | Applies a background color with opacity | `.background-alpha(#000, 50%)` | Applies a background color of black with opacity set to 50% |
| `.animation(time)` | Applies animation speed | `.animation(2s)` | Animation will run for 2 seconds |

* * *

## Demo

[View page example](https://cdn.rawgit.com/getbase/base/v4-dev/index.html) with just Base stylesheet applied.

* * *

## Modules and Components

* [Typography](https://github.com/getbase/typography)
* [Typography Helpers](https://github.com/getbase/typography-helpers)
* [Tables](https://github.com/getbase/tables)
* [Animations](https://github.com/getbase/animations)
* [Layout Helpers](https://github.com/getbase/layout-helpers)
* [Containers](https://github.com/getbase/containers)
* [Grid](https://github.com/getbase/grid)
* [Grid Helpers](https://github.com/getbase/grid-helpers)
* [Grid Non Responsive](https://github.com/getbase/grid-non-responsive)
* [Grid (Legacy)](https://github.com/getbase/grid-legacy)
* [Grid Helpers (Legacy)](https://github.com/getbase/grid-helpers-legacy)
* [Grid Non Responsive (Legacy)](https://github.com/getbase/grid-non-responsive-legacy)
* [Buttons](https://github.com/getbase/buttons)

* * *

## Templates

There are a [collection of premium templates built with Base](https://gumroad.com/getbase) which are available to download on Gumroad.

* * *

## Support

* IE10+ and all other modern browsers.
* Please, specify browsers you need to support in `package.json` according to [browserslist docs](https://github.com/ai/browserslist#queries).

* * *

## Credits

* Thanks to [Nicolas Gallagher (@necolas)](https://github.com/necolas/) for Normalize.css

* * *

## Authors

#### Matthew Hartman

* [https://twitter.com/matthewhartmans](https://twitter.com/matthewhartmans)
* [https://github.com/matthewhartman](https://github.com/matthewhartman)

* * *

## License

Code released under the [MIT Open Source](https://opensource.org/licenses/MIT) license.