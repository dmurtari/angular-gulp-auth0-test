'use strict';

var angular = require('angular');
require('angular-ui-router');
require('angular-storage');
require('angular-jwt');
require('auth0-angular');
require('angular-ui-bootstrap');

window.Auth0Lock = require('auth0-lock');
var auth0config = require('./config/auth0');

var app = angular.module('mbuOnline', [
  'ui.router',
  'angular-storage',
  'angular-jwt',
  'ui.bootstrap',
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
    });

  authProvider.init({
    domain: auth0config.domain,
    clientId: auth0config.clientID
  });
});

app.run(function(auth){
  auth.hookEvents();
});

require('./components');
