(function indexIIFE() {
  'use strict';

  angular
    .module('app', [
      'ngTouch',
      'restangular',
      'ui.router',
      'ui.bootstrap',

      'app.testPage'
    ])
    .config(appConfigFunc)
    .run(appRunFunc);

  appConfigFunc.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appConfigFunc($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/testPage/test-page.template.html',
        controller: 'TestPageCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

  function appRunFunc() {

  }
})();
