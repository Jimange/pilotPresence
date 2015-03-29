'use strict';

/**
 * @ngdoc function
 * @name pilotPresenceApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the pilotPresenceApp
 */
angular.module('pilotPresenceApp')
  .controller('CalendarCtrl', function ($scope, ratioClass, $state, $filter, $stateParams) {
    $scope.$emit('calendarClass', ratioClass);

    $scope.calendarView = 'month';
    $scope.calendarDay = new Date();
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
        "title": "Event 1",
        "type": "warning",
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
    $scope.calendarClicked = function($event){
      console.log('calendar clicked', $event);
    };

    var directiveScope;
    $scope.$watch(
      function watchedExpression(){
        var monthCalendarEl = document.querySelector('#monthCalendar mwl-calendar-month');
        return angular.element(monthCalendarEl).isolateScope();

      }, function watchHandler(isolatedScope){
        if(!isolatedScope) {
          return;
        }

        directiveScope = isolatedScope;
        console.log('month calendar scope');
        console.dir(directiveScope);
        directiveScope.dayClicked = dayClicked;
        directiveScope.drillDown = null;
        var dateStr = $stateParams.year + '-' + $stateParams.month + '-' + $stateParams.day;
        directiveScope.selectedDay = moment(dateStr);
        console.log('state params' ,$stateParams);
      }
    );

    function dayClicked(rowIndex, cellIndex){
      var day = directiveScope.view[rowIndex][cellIndex].date.startOf('day').toDate();
      var params = {
        year: $filter('date')(day, 'yyyy'),
        month: $filter('date')(day, 'MM'),
        day: $filter('date')(day, 'dd')
      };
      console.log('view', day);

      if($state.current.name !== 'booking.day') {
        $state.go('booking.day', params);
        return;
      }
      $state.go('booking.day', params, {location: false});
    }


  });
