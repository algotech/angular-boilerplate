# angular-boilerplate [![Build Status](https://travis-ci.org/algotech/angular-boilerplate.svg?branch=master)](https://travis-ci.org/algotech/angular-boilerplate)

A kickstarter for [AngularJS](https://angularjs.org) projects.

- [Quick Start](#quick-start)
- [About this project](#about-this-project)
- [Gulp Tasks](#gulp-tasks)
- [Style Guide](#style-guide)
  - [Directory structure](#directory-structure)
  - [Markup](#markup)
  - [Optimize the digest cycle](#optimize-the-digest-cycle)
  - [General guides](#general-guides)
  - [Modules](#modules)
  - [Controllers](#controllers)
  - [Directives](#directives)
  - [Filters](#filters)
  - [Services](#services)
  - [Templates](#templates)

## Quick Start

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

- And do not forget about [.editorconfig](.editorconfig) file.
You can read how to configure your favorite IDE to use it on
[editorconfig.org](http://editorconfig.org).

## About this project

It is designed to make life easy by providing a basic framework which kickstart
AngularJS projects. It contains a best-practice directory structure to ensure
code reusability and scalability.

## Gulp Tasks

This project comes with several tasks to optimize you development process:
- `gulp` or `gulp build` - build an optimized version of your application
in `/dist`
- `gulp serve` - launch a browser sync server on your source files
- `gulp serve:dist` - lunch a server on your optimized application
- `gulp serve --browser` - launch a user defined browser sync server on your source files
- `gulp test` - launch your unit tests with Karma
- `gulp test:auto` - launch your unit tests with Karma in watch mode
- `gulp protractor` - launch e2e tests with Protractor
- `gulp protractor:dist` - launch e2e tests with Protractor on the dist files
- `gulp ci` - used for continuous integration
(coding standards, unit tests, e2e tests)

Features included in the gulpfile:
- `useref` - allow configuration of your files in comments of your HTML file
- `ng-annotate` - convert simple injection to complete syntax to be
minification proof
- `uglify` - optimize all your JavaScript
- `csso` - optimize all your CSS
- `rev` - add a hash in the file names to prevent browser cache problems
- `watch` - watch your source files and recompile them automatically
- `jshint` - a static code analysis tool for javascript
- `jscs` - a code style linter for programmatically enforcing style guide
- `imagemin` - all your images will be optimized at build
- `karma` - out of the box unit test configuration with karma
- `protractor` - out of the box e2e test configuration with protractor
- `browser sync` - full-featured development web server with livereload and
devices sync
- `angular-templatecache` - all HTML partials will be converted to JS to be
bundled in the application

Both `protractor` and `karma` are using `Google Chrome` to execute tests. You 
should make sure you have `Chrome` installed or change `karma.conf.js` and/or 
`protractor.conf.js`. Note that a browser change in the config requires 
additional changes in `package.json` if the browser driver is not installed.

## Replace favicon

The favicons for this boilerplate were generated using 
[favicon-generator](http://www.favicon-generator.org). In order to replace the
current favicon all you have to do is access the mentioned website, generate 
your own favicon images set and replace it with the current one in the 
`src/favicon` folder.

## Style Guide

### Directory structure

- Since a large AngularJS application has many components it is best to
structure it in a directory hierarchy, creating high-level divisions by
functionality and lower-level divisions by component types:

```
.
├── src/app
│   ├── index.module.js
│   ├── common
│   │   ├── controllers
│   │   ├── directives
│   │   ├── filters
│   │   └── services
│   ├── home
│   │   ├── home.module.js
│   │   ├── home.controller.js
│   │   ├── home.template.html
│   │   ├── directives
│   │   │   ├── directive-name-1
│   │   │   │   ├── directive-name-1.directive.js
│   │   │   │   ├── directive-name-1.controller.js
│   │   │   │   └── directive-name-1.template.html
│   │   │   └── directive-name-2
│   │   │       └── ...
│   │   ├── filters
│   │   │   ├── filter-name-1.js
│   │   │   └── filter-name-2.js
│   │   └── services
│   │       ├── service-name-1.js
│   │       └── service-name-2.js
│   └── about
│       ├── about.module.js
│       ├── about.controller.js
│       ├── about.template.html
│       ├── directives
│       │   ├── directive-name-3
│       │   │   ├── directive-name-3.directive.js
│       │   │   ├── directive-name-3.controller.js
│       │   │   └── directive-name-3.template.html
│       │   └── directive-name-4
│       ├── filters
│       │   └── filter-name-3.js
│       └── services
│           └── service-name-3.js
├── src/assets
└── tests
    ├── e2e
    │   ├── home.po.js
    │   ├── home.spec.js
    │   ├── about.po.js
    │   └── about.spec.js
    └── unit
         ├── home.controller.spec.js
         └── about.controller.spec.js
```

- In case the directory name contains multiple words, use lisp-case syntax.

- When creating directives it may be useful to put all the files associated
with the given directive files (templates, CSS/SASS files, JavaScript) in
a single folder. Be consistent and use it everywhere along your project.

```
src/app
└── page 
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

### Markup

- JavaScript files should be loaded right before the `</body>`.
- Keep things simple and put AngularJS specific directives later.
This way is easy to look to the code and understand:

```
<form class="frm" ng-submit="login.authenticate()">
  <input class="ipt" type="text" placeholder="name" require ng-model="user">
</form>
```

- Other HTML attributes should follow the Code Guide's
[recommendation](http://mdo.github.io/code-guide/#html-attribute-order)

### Optimize the digest cycle

- Watch only the most vital variables (for example: when using real-time
communication, don't cause a `$digest` loop in each received message).

- For content that is initialized only once and then never changed,
use single-time watchers like [`bindonce`](https://github.com/Pasvaz/bindonce).

- Make computations in `$watch`  as simple as possible. Making heavy and slow
computations in a single `$watch` will slow down the whole application
(the `$digest` loop is done in a single thread because of the single-threaded
nature of JavaScript).

- Set third parameter in `$timeout` function to false to skip the `$digest`
loop when no watched variables are impacted by the invocation of the `$timeout`
callback function.

### General guides

- Use:
  - `$timeout` instead of `setTimeout`
  - `$interval` instead of `setInterval`
  - `$window` instead of `window`
  - `$document` instead of `document`
  - `$http` instead of `$.ajax`

This will make your testing easier and prevent unexpected behaviour.

- Use promises (`$q`) instead of callbacks. It will make your code to look more
elegant and clean, and save you from callback hell.
- Use `Restangular` instad of `$resource` or `$http` when possible.
- Don't use globals. Resolve all dependencies using Dependency Injection.
- Do not pollute your `$scope`. Only add functions and variables that
are being used in the templates.
- Do not use `$` prefix for the names of variables, properties and methods.
This prefix is reserved for AngularJS usage.
- When resolving dependencies through the DI mechanism of AngularJS, sort the
dependencies by their type - the built-in AngularJS dependencies should be
first, followed by your custom ones.

### Modules

Modules should be named with lowerCamelCase. For indicating that module `b`
is submodule of module `a` you can nest them by using namespacing like: `a.b`.

The recommended way for structuring the modules is by functionality.

### Controllers

- Do not manipulate DOM in your controllers. This will make your controllers
harder for testing and will violate the Separation of Concerns principle.
Use directives instead.

- The naming of the controller is done using the controller's functionality
(for example shopping cart, homepage, admin panel) and the substring `Ctrl` in
the end. The controllers are named UpperCamelCase
(`HomePageCtrl`, `ShoppingCartCtrl`, `AdminPanelCtrl`, etc.).

- The controllers should not be defined as globals (even though AngularJS
allows this, it is a bad practice to pollute the global namespace).

- Use array syntax for controller definitions:

```js
module.controller('MyCtrl', ['dependency1', function (dependency1) {
  //...body
}]);
```

Using this type of definition avoids problems with minification.

- Make the controllers as lean as possible. Abstract commonly used functions
into a service.

### Directives

- Name your directives with lowerCamelCase.
- Use custom prefixes for your directives to prevent name collisions
with third-party libraries.
- Do not use `ng` or `ui` prefixes since they are reserved for AngularJS
and AngularJS UI usage.
- DOM manipulations must be done only through directives.
- Create an isolated scope when you develop reusable components.
- Use directives as attributes or elements instead of comments or classes,
this will make your code more readable.
- Use `$scope.$on('$destroy', fn)` for cleaning up. This is especially
useful when you're wrapping third-party plugins as directives.
- Do not forget to use `$sce` when you should deal with untrusted content.

### Filters

- Name your filters with lowerCamelCase.
- Make your filters as light as possible. They are called often during
the `$digest` loop so creating a slow filter will slow down your app.
- Do a single thing in your filters, keep them coherent.
More complex manipulations can be achieved by piping existing filters.

### Services

This section includes information about the service component in AngularJS.
It is not dependent of the way of definition
(i.e. as provider, `.factory`, `.service`), except if explicitly mentioned.

- Use camelCase to name your services.
  - UpperCamelCase for naming your services, used as constructor functions
(see that User is just a factory used to instantiate multiple objects):

    ```js
    module.factory('User', function () {
      return function User(name, age) {
        this.name = name;
        this.age = age;
      };
    });

    module.controller('MainCtrl', function ($scope, User) {
      $scope.user = new User('foo', 42);
    });
    ```

  - lowerCamelCase for all other services.

- Encapsulate all the business logic in services.
- For session-level cache you can use `$cacheFactory`.
This should be used to cache results from requests or heavy computations.
- If given service requires configuration define the service as provider and
configure it in the `config` callback.

### Templates

- Use `ng-bind` or `ng-cloak` instead of `{{ }}` to prevent flashing content.
- Avoid writing complex expressions in the templates.
- When you need to set the `src` of an image dynamically use `ng-src`
instead of `src` with `{{ }}` template.
- When you need to set the `href` of an anchor tag dynamically use `ng-href`
instead of `href` with `{{ }}` template.
- Instead of using scope variable as string and using it with `style`
attribute with `{{ }}`, use the directive `ng-style` with object-like
parameters and scope variables as values:
