'use strict';

module.exports = function($http, auth, store, $location) {
  this.text = 'Hello';

  this.login = function () {
    auth.signin({}, function (profile, token) {
      store.set('profile', profile);
      store.set('token', token);
      $location.path('/');
    }, function () {
      console.log('Error logging in');
    });
  };

  this.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
  };

  this.isAuthenticated = function() {
    return auth.isAuthenticated && !!auth.profile;
  };
};
