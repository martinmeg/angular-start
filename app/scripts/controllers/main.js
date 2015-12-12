'use strict';

/**
 * @ngdoc function
 * @name startApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the startApp
 */
angular.module('startApp')
  .controller('MainCtrl', function ($scope) {
  	var movie = {
  		title: 'Skyfall',
  		image: 'http://vignette4.wikia.nocookie.net/jamesbond/images/b/b3/Skyfall_Logo.jpg',
  		description: 'James Bond movie'
  	}
    $scope.movie = movie;
  });
