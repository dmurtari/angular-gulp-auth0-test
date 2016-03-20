'use strict';

module.exports = function(store) {
  return {
    restrict: 'E',
    templateUrl: 'src/components/users/teachers/teacher.view.html',
    scope: {},
    link: function(scope) {
      scope.profile = store.get('profile').user_metadata.teacher;
    }
  };
};
