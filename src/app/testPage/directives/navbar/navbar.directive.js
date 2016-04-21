(function navbarDirectiveIIFE() {
  'use strict';

  angular
    .module('app.testPage')
    .directive('navbar', navbarFunc);

  function navbarFunc() {
    return {
      restrict: 'E',
      controller: 'NavbarCtrl',
      templateUrl: 'app/testPage/directives/navbar/navbar.template.html'
    };
  }
})();
