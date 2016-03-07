'use strict';

var credentials = require('../../config/auth0');

module.exports = function($http, $location, auth, store) {
  var login = function () {
    auth.signin({}, function (profile, token) {
      store.set('profile', profile);
      store.set('token', token);
      if (profile.user_metadata.completed_registration) {
        $location.path('/');
      } else {
        $location.path('/signup');
      }
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

  var updateUser = function(userId, metadata) {
    $http({
      method: 'PATCH',
      url: 'https://' + credentials.domain + '/api/v2/users/' + userId,
      data: {
        user_metadata: metadata
      },
      headers: {
        Authorization: 'Bearer ' + auth.idToken,
        'Content-Type': 'application/json'
      }
    }).then(function successCallback(response) {
        console.log('updated success', response);
      }, function errorCallback(response) {
        console.log('failed', response);
      }
    );
  }

  return {
    login: login,
    logout: logout,
    isAuthenticated: isAuthenticated,
    updateUser: updateUser
  };
};
