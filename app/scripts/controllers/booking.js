'use strict';

/**
 * @ngdoc function
 * @name pilotPresenceApp.controller:BookingCtrl
 * @description
 * # BookingCtrl
 * Controller of the pilotPresenceApp
 */
angular.module('pilotPresenceApp')
  .controller('BookingCtrl', function ($scope, $rootScope) {

    $scope.$on('calendarClass', function($event, ratio){
      $scope.calendar = ratio;
    });
    $scope.$on('dayClass', function($event, ratio){
      $scope.day = ratio;
    });

    /**
     * @returns {Number} the index of the object inserted
     */
    $scope.$on('addEvent', function($event, event){
      var length = $rootScope.events.push(event);
      return length - 1;
    });

    $rootScope.events = [
      {
        title: '', // The title of the event
        type: 'important', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        starts_at: new Date(2015,2,1,1), // jshint ignore:line
        // A javascript date object for when the event starts
        ends_at: new Date(2015,2,1,15), // jshint ignore:line
        // A javascript date object for when the event ends
        editable: false, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
        deletable: false // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      },
      {
        'title': '',
        'type': 'important',
        'starts_at': '2015-03-25T04:30:00.000Z',
        'ends_at': '2015-03-25T09:30:00.000Z',
        '$id': 0,
        'daySpan': 1,
        'dayOffset': 3
      },
      {
        'title': 'important',
        'starts_at': '2015-03-25T04:30:00.000Z',
        'ends_at': '2015-03-25T09:30:00.000Z',
        '$id': 0,
        'daySpan': 1,
        'dayOffset': 3
      }
    ];
  });
