'use strict';

var angular = require('angular');
require('angular-ui-router');

var app = angular.module('mbuOnline', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/views/main/main.html',
      controller: 'mbuMainController',
      controllerAs: 'main'
    });
});

require('./components');
