'use strict';

/**
 * @ngdoc function
 * @name pilotPresenceApp.controller:BookingCtrl
 * @description
 * # BookingCtrl
 * Controller of the pilotPresenceApp
 */
angular.module('pilotPresenceApp')
  .controller('BookingCtrl', function ($scope) {

    $scope.$on('calendarClass', function($event, ratio){
      $scope.calendar = ratio;
    });
    $scope.$on('dayClass', function($event, ratio){
      $scope.day = ratio;
    });
  });
