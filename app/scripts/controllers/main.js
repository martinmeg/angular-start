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
  	var movieList = [{
  		title: 'Skyfall',
  		image: 'http://vignette4.wikia.nocookie.net/jamesbond/images/b/b3/Skyfall_Logo.jpg',
  		description: 'James Bond movie 1'
  	}, {
  		title: 'Spectre',
  		image: 'http://vignette1.wikia.nocookie.net/jamesbond/images/0/0e/Spectre_Logo.png',
  		description: 'James Bond movie 2'
  	}, {
  		title: 'Casino Royale',
  		image: 'http://vignette2.wikia.nocookie.net/logopedia/images/9/92/Casino_Royale_Logo.jpg',
  		description: 'James Bond movie 3'
  	}];
    $scope.movies = movieList;
  });
