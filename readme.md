# [Base](http://getbase.org)

### A Rock Solid, Responsive CSS Framework built to work on all devices big and small.

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
* [Support](#support)
* [Authors](#authors)
* [Credits](#credits)

* * *

## Introduction
Base itself is a very thin layer which includes normalize.css and a few mixins to get you started.

You can then include what you need on top of Base such as typography, grids, individual components, etc to make it yours.

* * *

## Installation
If you are creating a new project from scratch, it is highly recommended you [use the base starter template](https://github.com/getbase/starter).

```bash
git clone https://github.com/getbase/starter.git \
new-website && cd new-website && rm -rf .git
npm install && npm start
```

Alternatively, if you have an existing project, simply install base using [NPM](https://www.npmjs.com/):

```bash
npm install --save @getbase/base
```

Once you have Base installed, you can then build on top of it by including your own styles or add the ready made packages provided by Base:

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
...

* * *

## Demo
...

* * *

## Modules and Components

* [Typography](#typography)
* [Typography Helpers](#typography-helpers)
* [Tables](#tables)
* [Animations](#animations)
* [Layout Helpers](#layout-helpers)
* [Containers](#containers)
* [Grid](#grid)
* [Grid Helpers](#grid-helpers)
* [Grid Non Responsive](#grid-non-responsive)
* [Grid (Legacy)](#grid-legacy)
* [Grid Helpers (Legacy)](#grid-helpers-legacy)
* [Grid Non Responsive (Legacy)](#grid-non-responsive-legacy)
* [Buttons](#buttons)

...

* * *

## Support
* IE10+ and all other modern browsers.
* Please, specify browsers you need to support in `package.json` according to [browserslist docs](https://github.com/ai/browserslist#queries).

* * *

## Credits
* Thanks to [Nicolas Gallagher (@necolas)](https://github.com/necolas/) for normalize.css

* * *

## Authors
#### Matthew Hartman
* [https://twitter.com/matthewhartmans](https://twitter.com/matthewhartmans)
* [https://github.com/matthewhartman](https://github.com/matthewhartman)

* * *

## License
Code released under the [MIT Open Source](https://opensource.org/licenses/MIT) license.