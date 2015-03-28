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
    var calendar;
    var day;

    $scope.$on('calendarClass', function($event, ratio){
      $scope.calendar = ratio;
      console.log('calendar',calendar);
    });
    $scope.$on('dayClass', function($event, ratio){
      $scope.day = ratio;
      console.log('calendar day',calendar, day);
    });
  });
