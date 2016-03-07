'use strict';

var _ = require('lodash');

module.exports = function() {

  this.user = {}

  this.save = function(isValid) {
    if(isValid) {
      console.log(this.user);
    } else {
      console.log('Invalid');
    }
  };

  this.resetRole = function() {
    console.log('resetting');
    this.user = _.omit(this.user, ['teacher', 'scoutmaster']);
  };

};
