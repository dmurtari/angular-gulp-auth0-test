/* jshint expr:true */

'use strict';

var expect = require('chai').expect;

describe('Profile Create Controller', function() {

  var mockMbuAuthService, mockAuth, profileCreateCtrl;

  beforeEach(angular.mock.module('mbuOnline'));

  beforeEach(inject(function($controller) {
    mockMbuAuthService = {
      updateUser: sinon.stub()
    };

    mockAuth = {
      profile: sinon.stub().returns({id: 'testid'})
    };

    profileCreateCtrl = $controller('mbuProfileCreateController', {
      mbuAuthService: mockMbuAuthService,
      auth: mockAuth
    });
  }));

  it('should exist', function() {
    expect(profileCreateCtrl).to.exist;
  });

  it('should use mbuAuthService to save data if valid', function() {
    profileCreateCtrl.save(true);
    assert(mockMbuAuthService.updateUser.calledOnce, 'Update not called');
  });

  it('should reset teacher and scoutmaster', function() {
    profileCreateCtrl.user = {
      name: 'test',
      teacher: {},
      scoutmaster: {}
    };
    
    assert(profileCreateCtrl.user.teacher);
    assert(profileCreateCtrl.user.scoutmaster);

    profileCreateCtrl.resetRole()

    assert(!profileCreateCtrl.user.teacher);
    assert(!profileCreateCtrl.user.scoutmaster);
  });
});
