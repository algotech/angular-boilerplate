(function navbarComponentIIFE() {
  'use strict';

  angular
    .module('app.testPage')
    .component('navbar', {
      bindings: {},
      controller: function() {
        this.date = new Date();
      },
      templateUrl: 'app/testPage/components/navbar/navbar.template.html'
    });
})();
