'use strict';

module.exports = function() {

  this.save = function(isValid, user) {
    if(isValid) {
      console.log(user);
    } else {
      console.log('Invalid');
    }
  };

};
