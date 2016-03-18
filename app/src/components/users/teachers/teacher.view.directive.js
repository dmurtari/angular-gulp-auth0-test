'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    template: require('./teacher.view.html'),
    controller: 'mbuTeacherViewController',
    controllerAs: 'teacherViewCtrl'
  };
};
