/* jshint expr:true */

'use strict';

var expect = require('chai').expect;

describe('Navbar Controller', function() {

  var mockMbuAuthService, mockAuth, navbarCtrl;

  beforeEach(angular.mock.module('mbuOnline'));

  beforeEach(inject(function($controller) {
    mockMbuAuthService = {
      login: sinon.stub(),
      logout: sinon.stub()
    };

    mockAuth = {
      isAuthenticated: true,
      profile: sinon.stub().returns({name: 'Test'})
    };

    navbarCtrl = $controller('mbuNavbarController', {
      mbuAuthService: mockMbuAuthService,
      auth: mockAuth
    });
  }));

  it('should exist', function() {
    expect(navbarCtrl).to.exist;
  });

  it('should call methods in the authentication service', function() {
    navbarCtrl.login();
    assert(mockMbuAuthService.login.calledOnce, 'Login not called');
    navbarCtrl.logout();
    assert(mockMbuAuthService.logout.calledOnce, 'Logout not called');
  });

  it('should decide whether to show the logout button', function() {
    var res = navbarCtrl.shouldShowLogout();
    assert(res, 'Returned false when it should be true');
  });
});
