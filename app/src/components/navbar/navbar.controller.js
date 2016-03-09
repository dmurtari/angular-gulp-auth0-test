'use strict';

module.exports = function(mbuAuthService, auth) {

  var vm = this;

  vm.login = function() {
    mbuAuthService.login();
  };

  vm.logout = function() {
    mbuAuthService.logout();
  };

  vm.shouldShowLogout = function() {
    return auth.isAuthenticated && !!auth.profile;
  };
  
  return vm;
};
