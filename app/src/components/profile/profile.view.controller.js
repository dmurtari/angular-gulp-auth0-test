'use strict';

module.exports = function(store) {
  var vm = this;

  vm.profile = store.get('profile');
  vm.metadata = store.get('profile').user_metadata;

  vm.isRole = function(role) {
    return vm.metadata.role === role;
  };

  return vm;
};
