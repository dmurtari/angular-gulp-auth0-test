var angular = require('angular');
var router = require('angular-ui-router');

var app = angular.module('mbuOnline', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./components/main/main.html"
    });
});

require('./components')
