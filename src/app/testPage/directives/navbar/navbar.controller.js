/**
 * Created by rares on 19/04/16.
 */
(function navbarCtrlIIFE() {
  'use strict';

  angular
    .module('app.testPage')
    .controller('NavbarCtrl', NavbarCtrlFunc);

  NavbarCtrlFunc.$inject = ['$scope'];

  function NavbarCtrlFunc($scope) {
    $scope.date = new Date();
  }
})();
