'use strict';

describe('Service: storeLocal', function () {

  // load the service's module
  beforeEach(module('pilotPresenceApp'));

  // instantiate service
  var storeLocal;
  beforeEach(inject(function (_storeLocal_) {
    storeLocal = _storeLocal_;
  }));

  it('should do something', function () {
    expect(!!storeLocal).toBe(true);
  });

});
