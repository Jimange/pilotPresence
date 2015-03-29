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
