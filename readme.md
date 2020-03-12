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

Base itself is a pretty thin CSS framework built on top of Normalize. Include what you need on top of Base such as custom typography, custom grids, components and make it yours.

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
  @import "~getbase/base/scss/mixins";
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
  @import "~getbase/base/less/mixins";
  @import "~getbase/base/less/core";
  @import "~getbase/base/less/grid";

  /* Your Other Styles */
  @import "main";
  ```

* * *

## Documentation

Base includes the latest version of Normalize.css by default and includes a few Mixins to get you started.

#### Helpers

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
| `.background-rgba(hex, decimal)` | Applies a background color with opacity | `.background-rgba(#000, .5)` | Applies a background color of black with opacity set to 50% |
| `.animate(time)` | Applies animation speed | `.animate(2s)` | Animation will run for 2 seconds |

* * *

## Demo

[View page example](https://unpkg.com/@getbase/base/index.html) with just Base stylesheet applied.

* * *

## Modules and Components

### Animations

Animations for fading in elements or content.

### Buttons

A basic set of styles for buttons and links.

### Containers

Containers for all breakpoints.

### Forms

Inputs (text, number, etc), textarea, radio boxes and checkboxes.

### Grid

A grid built with flexbox that includes a 12 column, percentage layout for all breakpoints.

### Layout Helpers

Styles for resetting margins, resetting paddings, resetting floats, setting position types and flex helpers for all breakpoints.

### Layout Spacers

Spacing utilities (`.padding-top-0-5rem`, `.padding-bottom-0-5rem`, `.padding-1rem`, `.padding-1rem`, etc) for all breakpoints.

### Tables

A basic style for all tables.

### Typography

Essential for copy and headings (paragraphs, lists, headings).

## Blockquotes
Styles for blockquotes

## Codeblocks
A basic set of styles for all types of code blocks.

### Typography Helpers

Adjust font weights, text transformations and helpers for aligning copy for all breakpoints.

* * *

## Templates

There are a [collection of premium templates built with Base](https://gumroad.com/getbase) which are available to download on Gumroad.

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