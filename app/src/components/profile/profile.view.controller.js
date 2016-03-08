'use strict';

module.exports = function(store) {
  var vm = this;

  vm.profile = store.get('profile');
  vm.metadata = store.get('profile').user_metadata;

  vm.chapter = function() {
    if (vm.metadata.role === 'teacher') {
      switch(vm.metadata.teacher.chapter) {
        case 'gammatheta':
          return 'Gamma Theta';
        case 'alphaetaiota':
          return 'Alpha Eta Iota';
        case 'epsilonxi':
          return 'Epsilon Xi';
        case 'mupi':
          return 'Mu Pi';
        case 'unaffiliated':
          return 'Other community member';
      }
    }
  };

  return vm;
};
