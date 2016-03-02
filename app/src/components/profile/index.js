'use strict';

var app = require('angular').module('mbuOnline');

app.directive('mbuProfileEdit', require('./profile.edit.directive'));
app.controller('mbuProfileEditController', require('./profile.edit.controller'));
