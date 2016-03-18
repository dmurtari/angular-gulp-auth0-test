'use strict';

var app = require('angular').module('mbuOnline');

app.directive('mbuTeacherView', require('./teacher.view.directive'));
app.controller('mbuTeacherViewController', require('./teacher.view.controller'));
