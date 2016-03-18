'use strict';

var app = require('angular').module('mbuOnline');

app.directive('mbuScoutmasterView', require('./scoutmaster.view.directive'));
app.controller('mbuScoutmasterViewController', require('./scoutmaster.view.controller'));
