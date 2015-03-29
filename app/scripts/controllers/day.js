// jshint global moment
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

    $scope.startTime = null;
    $scope.endTime = null;

    var directiveScope;
    var dayCalendarEl;

    $scope.$watch(
      function watchedExpression(){
        dayCalendarEl = document.querySelector('#dayCalendar mwl-calendar-day');
        return angular.element(dayCalendarEl).isolateScope();

      }, function watchHandler(isolatedScope){
        if(!isolatedScope) {
          return;
        }

        directiveScope = isolatedScope;
        console.log('day calendar scope');
        console.dir(directiveScope);

        var panelHour = dayCalendarEl.querySelector('.cal-day-panel-hour');
        angular.element(panelHour).bind('click', function($event){
          var timePart = $event.target.dataset['timepart'];
          var hour = timePart? $event.target.parentElement.dataset['label'] : null;

          //don't carry on of the hour or the time part are not defined
          if (!(timePart && hour)){

          }
          if(timePart && hour) {
            console.log('bonjour ', timePart, hour);
            hour = hour.substring(0, hour.length - 2);
            var momentTime = moment($scope.calendarDay).hour(hour).minutes(timePart == 1? '00' : '30');
            console.log(momentTime);
          }

        });




        //directiveScope.dayClicked = dayClicked;
        //directiveScope.drillDown = null;
        //directiveScope.selectedDay = moment(dateStr);
        //console.log('state params' ,$stateParams);
      }
    );
  });
