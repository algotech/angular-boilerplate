(function thumbnailCardDirectiveIIFE() {
  'use strict';

  angular
    .module('app.testPage')
    .directive('thumbnailCard', thumbnailCardFunc);

  function thumbnailCardFunc() {
    var templateUrl = 'app/testPage/directives/thumbnail-card/' +
      'thumbnail-card.template.html';

    return {
      restrict: 'E',
      scope: {
        content: '='
      },
      templateUrl: templateUrl
    };
  }
})();
