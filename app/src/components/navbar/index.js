'use strict';

var app = require('angular').module('mbuOnline');

app.controller('mbuNavbarController', require('navbar.controller'));
app.directive('mbuNavbar', require('navbar.directive'));
