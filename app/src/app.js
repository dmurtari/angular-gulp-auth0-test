'use strict';

var angular = require('angular');
require('angular-storage');
require('angular-jwt');
require('auth0-angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-ui-mask');

window.Auth0Lock = require('auth0-lock');
var auth0config = require('./config/auth0');

var app = angular.module('mbuOnline', [
  'angular-storage',
  'angular-jwt',
  'ui.router',
  'ui.bootstrap',
  'ui.mask',
  'auth0'
]);

app.config(function($stateProvider, $urlRouterProvider, authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/views/main/main.html',
      controller: 'mbuMainController',
      controllerAs: 'main'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'src/views/signup/signup.html',
      data: {
        requiresLogin: true
      }
    })
    .state('profileView', {
      url: '/profile',
      templateUrl: 'src/views/users/profile.view.html',
      controller: 'mbuProfileViewController',
      controllerAs: 'profileViewCtrl',
      data: {
        requiresLogin: true
      }
    });

  authProvider.init({
    domain: auth0config.domain,
    clientId: auth0config.clientID,
    callbackUrl: location.href,
    loginState: 'home'
  });
});

app.run(function($rootScope, auth, store, jwtHelper, $state){
  auth.hookEvents();

  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        $state.go('home');
      }
    }

  });
});

require('./components');
