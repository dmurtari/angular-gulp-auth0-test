'use strict';

var expect = require('chai').expect;

describe('Navbar Controller', function() {

  var mockMbuAuthService, mockAuth, navbarCtrl;
  beforeEach(angular.mock.module('mbuOnline'));

  beforeEach(function() {
    navbarCtrl = "Foo";
  })

  beforeEach(inject(function($controller) {
    mockMbuAuthService = {
      login: 'hello',
      logout: 'world'
    };

    mockAuth = {
      isAuthenticated: 'world'
    };

    navbarCtrl = $controller('mbuNavbarController', {
      mbuAuthService: mockMbuAuthService,
      auth: mockAuth
    })
  }));

  it('should exist', function() {
    expect(navbarCtrl).to.exist;
  });

});
