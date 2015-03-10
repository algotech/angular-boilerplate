# angular-boilerplate [![Build Status](https://travis-ci.org/algotech/angular-boilerplate.svg?branch=master)](https://travis-ci.org/algotech/angular-boilerplate) #

A kickstarter for [AngularJS](https://angularjs.org) projects.

### Quick Start ###

- First of all, make sure you have [Node.JS](https://nodejs.org) installed
before continuing.

- Install gulp and bower:
```
npm install -g gulp bower
```

- Get the code:
```
git clone git://github.com/algotech/angular-boilerplate
```

- Install project dependencies:
```
npm install
bower install
```
- Finally test it:
```
gulp serve
```

### About this project ###

It is designed to make life easy by providing a basic framework which kickstart AngularJS projects.
It contains a best-practice directory structure to ensure code reusability and scalability.

### Gulp Tasks ###

This project comes with several tasks aiming to optimize you development process:
- `gulp` or `gulp build` - to build an optimized version of tou application in `/dist`
- `gulp serve` - to launch a browser sync server on your source files
- `gulp serve:dist` - to lunch a server on your optimized application
- `gulp test` - to launch your unit tests with Karma
- `gulp test:auto` - to launch your unit tests with Karma in watch mode
- `gulp protractor` - to launch e2e tests with Protractor
- `gulp protractor:dist` - to launch e2e tests with Protractor on the dist files

Features included in the gulpfile:
- `useref` - allow configuration of your files in comments of your HTML file
- `ng-annotate` - convert simple injection to complete syntax to be minification proof
- `uglify` - optimize all your JavaScript
- `csso` - optimize all your CSS
- `rev` - add a hash in the file names to prevent browser cache problems
- `watch` - watch your source files and recompile them automatically
- `jshint` - a static code analysis tool for javascript
- `imagemin` - all your images will be optimized at build
- `karma` - out of the box unit test configuration with karma
- `protractor` - out of the box e2e test configuration with protractor
- `browser sync` - full-featured development web server with livereload and devices sync
- `angular-templatecache` - all HTML partials will be converted to JS to be bundled in the application

### Style Guide ###

#### Directory structure ####

- Since a large AngularJS application has many components it is best to structure it in a directory hierarchy,
creating high-level divisions by functionality and lower-level divisions by component types:

```
.
├── src/app
│   ├── app.js
│   ├── common
│   │   ├── controllers
│   │   ├── directives
│   │   ├── filters
│   │   └── services
│   ├── home
│   │   ├── controllers
│   │   │   ├── FirstCtrl.js
│   │   │   └── SecondCtrl.js
│   │   ├── directives
│   │   │   └── directive1.js
│   │   ├── filters
│   │   │   ├── filter1.js
│   │   │   └── filter2.js
│   │   └── services
│   │       ├── service1.js
│   │       └── service2.js
│   └── about
│       ├── controllers
│       │   └── ThirdCtrl.js
│       ├── directives
│       │   ├── directive2.js
│       │   └── directive3.js
│       ├── filters
│       │   └── filter3.js
│       └── services
│           └── service3.js
├── src/assets
├── src/partials
└── e2e
    ├── home
    │   ├── FirstCtrl.spec.js
    │   ├── SecondCtrl.spec.js
    ├── about
    │   └── ThirdCtrl.spec.js
    └── about
```

- In case the directory name contains multiple words, use lisp-case syntax:

```
src/app
 ├── app.js
 └── my-complex-module
     ├── controllers
     ├── directives
     ├── filters
     └── services
```

- When creating directives it may be useful to put all the files associated with the given directive
files (templates, CSS/SASS files, JavaScript) in a single folder. Be consistent and use it everywhere
along your project.

```
src/app
└── directives
    ├── directive-category
    │   ├── category.html
    │   ├── category.js
    │   └── category.sass
    └── directive-product
        ├── product.html
        ├── product.js
        └── product.sass
```

#### Markup ####

- JavaScript files should be loaded right before the `</body>`

```
<form class="frm" ng-submit="login.authenticate()">
  <input class="ipt" type="text" placeholder="name" require ng-model="user.name">
</form>
```

- Other HTML atributes should follow the Code Guide's
[recommendation](http://mdo.github.io/code-guide/#html-attribute-order)

#### Optimize the digest cycle ####

- Watch only the most vital variables (for example: when using real-time communication,
don't cause a `$digest` loop in each received message).

- For content that is initialized only once and then never changed,
use single-time watchers like [`bindonce`](https://github.com/Pasvaz/bindonce).

- Make computations in `$watch`  as simple as possible. Making heavy and slow computations
in a single `$watch` will slow down the whole application
(the `$digest` loop is done in a single thread because of the single-threaded nature of JavaScript).

- Set third parameter in `$timeout` function to false to skip the `$digest` loop
when no watched variables are impacted by the invocation of the `$timeout` callback function.

#### General ####

- Use:
  - `$timeout` instead of `setTimeout`
  - `$interval` instead of `setInterval`
  - `$window` instead of `window`
  - `$document` instead of `document`
  - `$http` instead of `$.ajax`

This will make your testing easier and in some cases prevent unexpected behaviour

- Use promises (`$q`) instead of callbacks. It will make your code to look more
elegant and clean, and save you from callback hell.
- Use `Restangular` instad of `$resource` or `$http` when possible.
- Don't use globals. Resolve all dependencies using Dependency Injection.
- Do not pollute your `$scope`. Only add functions and variables that
are being used in the templates.
- Do not use `$` prefix for the names of variables, properties and methods.
This prefix is reserved for AngularJS usage.
- When resolving dependencies through the DI mechanism of AngularJS, sort the dependencies
by their type - the built-in AngularJS dependencies should be first, followed by your custom ones.
