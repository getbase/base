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
* [Demo](#demo)
* [Modules and Components](#modules-and-components)
* [Templates](#templates)
* [Support](#support)
* [Authors](#authors)
* [Credits](#credits)
* [License](#license)

* * *

## Overview

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
  @import url("https://cdn.rawgit.com/getbase/base/master/css/index.css");
  ```

#### SCSS Import:

  ```scss
  /* Import Base */
  @import "node_modules/@getbase/base/scss/index";
  /* Your Other Styles */
  @import "main"
  ```

#### LESS Import:

  ```css
  /* Import Base */
  @import "node_modules/@getbase/base/scss/index";
  /* Your Other Styles */
  @import "main"
  ```

* * *

## Documentation

Base includes the latest version of Normalize.css by default and includes a few Mixins to get you started.

#### Helpers (Applies to SCSS/LESS)

| Helper Class | Purpose | Example | Outcome |
| ------------ | ------- | ------- | ------- |
| `.sr` | Apply a class of `.sr` for screen reader copy | `<div class="sr">Content only visible to screen readers but hidden from the user</div>` | Hide element visually, but have it still available for screenreaders |


### SCSS

#### Variables

| Variable | Purpose | Default | 
| -------- | ------- | ------- |
| `$breakpoint-m` | Breakpoint value for medium devices (tablet) | `768px` |
| `$breakpoint-l` | Breakpoint value for large devices (desktop) | `980px` |
| `$breakpoint-x` | Breakpoint value for extra large devices (HD) | `1200px` |

#### Mixins

| Mixin | Purpose | Example | Outcome |
| ----- | ------- | ------- | ------- |
| `@include breakpoint(x)` | Apply a breakpoint for a particular device. Accepts values `m`, `l` and `xl` (m: medium, l: large, xl: extra large) | `.box { @include breakpoint(m) { ... } }` | Applies styles to `.box` for medium devices and up |
| `@include background-alpha(hex, percentage)` | Applies a background color with opacity | `@include background-alpha(#000, 50%)` | Applies a background color of black with opacity set to 50% |
| `@include animate(time)` | Applies animation speed | `@include animate(2s)` | Animation will run for 2 seconds |

### LESS

#### Variables

| Variable | Purpose | Default |
| -------- | ------- | ------- |
| `@breakpoint-m` | Breakpoint value for medium devices (tablet) | `768px` |
| `@breakpoint-l` | Breakpoint value for large devices (desktop) | `980px` |
| `@breakpoint-x` | Breakpoint value for extra large devices (HD) | `1200px` |

#### Mixins

| Mixin | Purpose | Example | Outcome |
| ----- | ------- | ------- | ------- |
| `.background-alpha(hex, percentage)` | Applies a background color with opacity | `.background-alpha(#000, 50%)` | Applies a background color of black with opacity set to 50% |
| `.animate(time)` | Applies animation speed | `.animate(2s)` | Animation will run for 2 seconds |

* * *

## Demo

[View page example](https://cdn.rawgit.com/getbase/base/master/index.html) with just Base stylesheet applied.

* * *

## Modules and Components

### [Animations](https://github.com/getbase/animations)

Base Animations is a very thin layer which includes animations for fading in content.

### [Buttons](https://github.com/getbase/buttons)

Base buttons is a very thin layer which includes styles for decorating buttons and links.

### [Containers](https://github.com/getbase/containers)

Base Containers is a very thin layer which contains styles for containers for all breakpoints.

### [Forms](https://github.com/getbase/forms)

Base Forms contains styles for inputs, textarea, radios, checkboxes and other form elements.

### [Grid](https://github.com/getbase/grid)

Base Grid contains styles for flex grids with rows and columns for your layout for all breakpoints.

### [Layout Helpers](https://github.com/getbase/layout-helpers)

Base Layout Helpers contains styles for resetting margins, resetting paddings, resetting floats, setting position types and flex helpers for all breakpoints.

### [Layout Spacers](https://github.com/getbase/layout-spacers)

Base Layout Spacers contains styles for adding spaced rows (`.pad-top-5`, `.pad-bottom-20`, etc) and spaced layout (`.pad-5`, `.pad-20`, etc) for all breakpoints.

### [Micro Grid](https://github.com/getbase/micro-grid)

Base Micro Grid contains styles for flex grids with rows and basic columns for all breakpoints.

### [Tables](https://github.com/getbase/tables)

Base Tables is a very thin layer which contains styles for tables for all breakpoints.

### [Typography Helpers](https://github.com/getbase/typography-helpers)

Base Typography Helpers contains styles for adjusting font weights, text transformations and aligning copy for all breakpoints.

### [Typography](https://github.com/getbase/typography)

Base Typography contains styles for headings, copy, blockquotes, codeblocks, lists and all other standard typography.

* * *

## Templates

There are a [collection of premium templates built with Base](https://gumroad.com/getbase) which are available to download on Gumroad.

* * *

## Support

* IE10+ and all other modern browsers.
* Please specify browsers you need to support in `package.json` according to [browserslist docs](https://github.com/ai/browserslist#queries).

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
