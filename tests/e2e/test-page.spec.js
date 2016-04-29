'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./test-page.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/algotech.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('We are AlgoTech');
  });

  it('list more than 5 awesome things', function () {
    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });

});
