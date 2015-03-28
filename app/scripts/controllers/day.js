'use strict';

/**
 * @ngdoc function
 * @name pilotPresenceApp.controller:DayCtrl
 * @description
 * # DayCtrl
 * Controller of the pilotPresenceApp
 */
angular.module('pilotPresenceApp')
  .controller('DayCtrl', function ($scope, ratioClass) {
    $scope.$emit('dayClass', ratioClass);

    $scope.calendarView = 'day';
    $scope.calendarDay = new Date();
    $scope.events = [
      {
        title: 'My event title', // The title of the event
        type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        starts_at: new Date(2013,5,1,1), // A javascript date object for when the event starts
        ends_at: new Date(2014,8,26,15), // A javascript date object for when the event ends
        editable: false, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
        deletable: false // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      }
    ];
  });
