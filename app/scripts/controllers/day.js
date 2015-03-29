'use strict';

/**
 * @ngdoc function
 * @name pilotPresenceApp.controller:DayCtrl
 * @description
 * # DayCtrl
 * Controller of the pilotPresenceApp
 */
angular.module('pilotPresenceApp')
  .controller('DayCtrl', function ($scope, ratioClass, $stateParams) {
    $scope.$emit('dayClass', ratioClass);

    $scope.calendarView = 'day';
    $scope.calendarDay = new Date($stateParams.year + '-' + $stateParams.month + '-' + $stateParams.day);
    console.log($scope.calendarDay);
    $scope.events = [
      {
        title: 'My event title', // The title of the event
        type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        starts_at: new Date(2015,2,1,1), // jshint ignore:line
        // A javascript date object for when the event starts
        ends_at: new Date(2015,2,1,15), // jshint ignore:line
        // A javascript date object for when the event ends
        editable: false, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
        deletable: false // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
      },
      {
        "title": "Sherlock",
        "type": "warning",
        "starts_at": "2015-03-25T04:30:00.000Z",
        "ends_at": "2015-03-25T09:30:00.000Z",
        "$id": 0,
        "daySpan": 1,
        "dayOffset": 3,
        "top": 0,
        "height": 210,
        "left": 0
      },
      {
        "title": "MyCraft",
        "starts_at": "2015-03-25T04:30:00.000Z",
        "ends_at": "2015-03-25T09:30:00.000Z",
        "$id": 0,
        "daySpan": 1,
        "dayOffset": 3,
        "top": 0,
        "height": 210,
        "left": 0
      }
    ];

    var directiveScope;
    $scope.$watch(
      function watchedExpression(){
        var monthCalendarEl = document.querySelector('#dayCalendar mwl-calendar-day');
        return angular.element(monthCalendarEl).isolateScope();

      }, function watchHandler(isolatedScope){
        if(!isolatedScope) {
          return;
        }

        directiveScope = isolatedScope;
        console.log('day calendar scope');
        console.dir(directiveScope);
        //directiveScope.dayClicked = dayClicked;
        //directiveScope.drillDown = null;
        //directiveScope.selectedDay = moment(dateStr);
        //console.log('state params' ,$stateParams);
      }
    );
  });
