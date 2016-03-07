'use strict';

var _ = require('lodash');

module.exports = function(auth, mbuAuthService) {

  this.user = {};

  this.save = function(isValid) {
    if(isValid) {
      console.log(this.user);
      this.user.completed_registration = true;
      mbuAuthService.updateUser(auth.profile.user_id, this.user);
    } else {
      console.log('Invalid');
    }
  };

  this.resetRole = function() {
    console.log('resetting');
    this.user = _.omit(this.user, ['teacher', 'scoutmaster']);
  };

};
