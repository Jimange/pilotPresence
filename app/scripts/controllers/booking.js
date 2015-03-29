'use strict';

/**
 * @ngdoc function
 * @name pilotPresenceApp.controller:BookingCtrl
 * @description
 * # BookingCtrl
 * Controller of the pilotPresenceApp
 */
angular.module('pilotPresenceApp')
  .controller('BookingCtrl', function ($scope, $rootScope, StoreLocal) {


    var temp = angular.copy(StoreLocal.getItem('events'));
    console.log(temp);
    angular.forEach(temp, function(value, index){
      temp[index].starts_at = new Date(value.starts_at);
      temp[index].ends_at = new Date(value.ends_at);
    });
      $rootScope.events = temp? temp : null;
    console.log('hello helloo ooo', temp);
//    console.log('hello helloo ooo', (temp[1].starts_at) instanceof  Date);


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
      console.log(event);
      var length = $rootScope.events.push(event);
      console.log($rootScope.events);
      $scope.$apply();
      return length - 1;
      StoreLocal.setItem('events',$rootScope.events);
    });

    if ($rootScope.events == null) {
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
    }
  });
