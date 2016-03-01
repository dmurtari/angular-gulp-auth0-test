'use strict';

module.exports = function(mbuAuthService, auth) {

  this.login = function() {
    mbuAuthService.login();
  };

  this.logout = function() {
    mbuAuthService.logout();
  };

  this.shouldShowLogout = function() {
    return auth.isAuthenticated && !!auth.profile;
  };
};
