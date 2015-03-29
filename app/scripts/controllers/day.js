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
  .controller('DayCtrl', function ($scope, ratioClass, $stateParams, $rootScope, $state, StoreLocal) {
    $scope.$emit('dayClass', ratioClass);

    $scope.calendarView = 'day';
    $scope.calendarDay = new Date($stateParams.year + '-' + $stateParams.month + '-' + $stateParams.day);

    $scope.startTime = null;
    $scope.endTime = null;

    var directiveScope;
    var dayCalendarEl;

    if(!$rootScope.events) {
      var temp =  StoreLocal.getItem('events');
      angular.forEach(temp, function(index, value){
        temp[index].starts_at = new Date(value.starts_at);
        temp[index].ends_at = new Date(value.ends_at);
      });
      $rootScope.events = temp? temp : null;
    }

    function clickHandler($event){
      var timePart = $event.target.dataset['timepart'];
      var hour = timePart? $event.target.parentElement.dataset['label'] : null;

      //don't carry on of the hour or the time part are not defined
      if (!(timePart && hour)){
        return;
      }
      hour = hour.substring(0, hour.length - 2);
      var momentTime = moment($scope.calendarDay).hour(hour).minutes(timePart == 1? '00' : '30');
      console.log(momentTime);

      var booking = {
        starts_at: angular.copy(momentTime).add(-1, 'hour').toDate(), // jshint ignore:line
        ends_at: momentTime.toDate(), // jshint ignore:line
        title: '' // The title of the event
      };

      $rootScope.events.push(booking);
      StoreLocal.setItem('events',$rootScope.events);



//      if($scope.startTime) {
//        $scope.endTime = momentTime.toDate();
//      } else {
//        $scope.startTime = momentTime.toDate();
//        $scope.startEl = $event.target;
//        $event.target.classList.add('select-active');
//        console.log($event.target);
//      }
      $scope.$apply();
      console.log('hello', $scope.startTime, $scope.endTime);
      $state.reload();
    };

    var watchHandler = $scope.$watch(function watchedExpression(){
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
      angular.element(panelHour).bind('click', clickHandler);

      watchHandler();
    });

//    $scope.$watch('endTime', function(endTime){
//      console.log('eifoewifo', $scope.startTime, $scope.endTime);
//
//      if(!($scope.startTime && endTime)) {
//        return;
//      }
//
//      var booking = {
//        title: '', // The title of the event
//        starts_at: $scope.startTime, // jshint ignore:line
//        ends_at: $scope.endTime // jshint ignore:line
//      };
//
//      $scope.$emit('addEvent', booking);
//
//      $scope.startTime = null;
//      $scope.endTime = null;
//    });

  });