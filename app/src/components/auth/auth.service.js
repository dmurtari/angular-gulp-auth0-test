'use strict';

module.exports = function($http, auth, store, $location) {
  var login = function () {
    auth.signin({}, function (profile, token) {
      store.set('profile', profile);
      store.set('token', token);
      $location.path('/');
    }, function () {
      console.log('Error logging in');
    });
  };

  var logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
  };

  var isAuthenticated = function() {
    return auth.isAuthenticated && !!auth.profile;
  };

  return {
    login: login,
    logout: logout,
    isAuthenticated: isAuthenticated
  };
};
