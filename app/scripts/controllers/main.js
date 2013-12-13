'use strict';

angular.module('scrollEventApp')
  .controller('MainCtrl', function ($scope) {
    $scope.left_pos = 0;
    $scope.top_pos  = 0;

    $scope.show_try = function (){
      $scope.try_opa = 1;
    };

    $scope.hide_try = function (){
      $scope.try_opa = ( 167 - $scope.left_pos  ) / 167;
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
