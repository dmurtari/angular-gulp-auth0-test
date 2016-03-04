'use strict';

var app = require('angular').module('mbuOnline');

app.directive('mbuProfileCreate', require('./profile.create.directive'));
app.controller('mbuProfileCreateController', require('./profile.create.controller'));
