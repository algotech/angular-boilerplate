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
