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

  vm.userName = function() {
    if (auth.profile.user_metadata.firstname) {
      return auth.profile.user_metadata.firstname;
    } else {
      return auth.profile.email;
    }
  };

  return vm;
};
