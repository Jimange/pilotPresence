'use strict';

/**
 * @ngdoc overview
 * @name pilotPresenceApp
 * @description
 * # pilotPresenceApp
 *
 * Main module of the application.
 */
angular
  .module('pilotPresenceApp', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'uiGmapgoogle-maps',
    'mwl.calendar'
  ])
  .config(function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
//      .state('auth', {
//        url: '/login',
//        templateUrl: '',
//        controller: ''
//      })
      .state('booking', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl'
      })
      .state('booking.calendar', {
        url: '/booking',
        views: {
          calendar: {
            templateUrl: 'views/booking-calendar.html',
            controller: 'CalendarCtrl',
            resolve: {
              ratioClass: function(){
                return 'col-md-12';
              }
            }
          }
        }
      })
      .state('booking.day', {
        url: '/booking/:year/:month/:day',
        views: {
          calendar: {
            templateUrl: 'views/booking-calendar.html',
            controller: 'CalendarCtrl',
            resolve: {
              ratioClass:  function(){
                return 'col-md-5';
              }
            }
          },
          booking: {
            templateUrl: 'views/booking-day.html',
            controller: 'DayCtrl',
            resolve: {
              ratioClass: function(){
                return 'col-md-7';
              }
            }
          }
        }
      })
      /*.state('edit', {
	      templateUrl: 'views/edit.html'
      	}
      })*/
    ;

    //Google map API
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBWdclaCvBCuCUBnBzFetjc6ficgFa492w',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  })
;

/* jshint ignore:start */
angular.module("mwl.calendar")
  .run(["$templateCache", function($templateCache) {
      $templateCache.put("templates/day.html","<div class=\"cal-day-box\"><div class=\"row-fluid clearfix cal-row-head\"><div class=\"span1 col-xs-1 cal-cell\">{{ timeLabel || \'Time\' }}</div><div class=\"span11 col-xs-11 cal-cell\">{{ eventLabel || \'Events\' }}</div></div><div class=\"cal-day-panel\" class=\"clearfix\" ng-style=\"{height: (days.length * dayHeight) + \'px\'}\"><div class=\"cal-day-panel-hour\"><div class=\"cal-day-hour\" ng-repeat=\"day in days track by $index\" data-label=\"{{ day.label }}\"><div class=\"row-fluid cal-day-hour-part\" data-timepart=\"1\"><div class=\"span1 col-xs-1\"><strong>{{ day.label }}</strong></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\" data-timepart=\"2\"><div class=\"span1 col-xs-1\"></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\" ng-show=\"dayViewSplit < 30\"><div class=\"span1 col-xs-1\"></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\" ng-show=\"dayViewSplit < 30\"><div class=\"span1 col-xs-1\"></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\" ng-show=\"dayViewSplit < 15\"><div class=\"span1 col-xs-1\"></div><div class=\"span11 col-xs-11\"></div></div><div class=\"row-fluid cal-day-hour-part\" ng-show=\"dayViewSplit < 15\"><div class=\"span1 col-xs-1\"></div><div class=\"span11 col-xs-11\"></div></div></div></div><div class=\"pull-left day-event day-highlight dh-event-{{ event.type }}\" ng-repeat=\"event in view track by $index\" ng-style=\"{top: event.top + \'px\', left: event.left + 60 + \'px\', height: event.height + \'px\'}\"><a href=\"javascript:;\" class=\"event-item\" ng-click=\"eventClick({$event: event})\"><span>{{ event.title | truncateEventTitle:20:event.height }}</span></a></div></div></div>");
      $templateCache.put("templates/month.html","<div class=\"cal-row-fluid cal-row-head\"><div class=\"cal-cell1\" ng-repeat=\"day in weekDays track by $index\">{{ day }}</div></div><div class=\"cal-month-box\"><div ng-repeat=\"week in view track by $index\"><div class=\"cal-row-fluid cal-before-eventlist\"><div class=\"cal-cell1 cal-cell {{ day.highlightClass }}\" ng-repeat=\"day in week track by $index\" ng-click=\"dayClicked($parent.$index, $index)\" ng-class=\"{pointer: true}\"><div class=\"cal-month-day\" ng-class=\"{\'cal-day-current\': day.date.isSame(selectedDay), \'cal-day-outmonth\': !day.inMonth, \'cal-day-inmonth\': day.inMonth, \'cal-day-weekend\': $index == 5 || $index == 6, \'cal-day-today\': day.isToday}\"><small class=\"cal-events-num badge badge-important pull-left\" ng-show=\"day.events.length > 0\">{{ day.events.length }}</small> <span class=\"pull-right\" data-cal-date ng-click=\"drillDown(day.label)\">{{ day.label }}</span><div class=\"cal-day-tick\" ng-show=\"day.isOpened\"><i class=\"glyphicon glyphicon-chevron-up\"></i> <i class=\"fa fa-chevron-up\"></i></div><div class=\"events-list\" ng-show=\"day.events.length > 0\"><a href=\"javascript:;\" ng-click=\"eventClick({$event: event})\" ng-repeat=\"event in day.events track by $index\" class=\"pull-left event event-{{ event.type }}\" ng-mouseenter=\"highlightEvent(event, true)\" ng-mouseleave=\"highlightEvent(event, false)\" tooltip-append-to-body=\"true\" tooltip=\"{{ event.title }}\"></a></div></div></div></div><div class=\"cal-slide-box\" collapse=\"!week.isOpened\" mwl-collapse-fallback=\"!week.isOpened\"><div class=\"cal-slide-content cal-event-list\"><ul class=\"unstyled list-unstyled\"><li ng-repeat=\"event in openEvents track by $index\"><span class=\"pull-left event event-{{ event.type }}\"></span> &nbsp; <a href=\"javascript:;\" class=\"event-item\" ng-click=\"eventClick({$event: event})\">{{ event.title }}</a> <a href=\"javascript:;\" class=\"event-item-edit\" ng-if=\"editEventHtml && event.editable !== false\" ng-bind-html=\"$sce.trustAsHtml(editEventHtml)\" ng-click=\"eventEditClick({$event: event})\"></a> <a href=\"javascript:;\" class=\"event-item-delete\" ng-if=\"deleteEventHtml && event.deletable !== false\" ng-bind-html=\"$sce.trustAsHtml(deleteEventHtml)\" ng-click=\"eventDeleteClick({$event: event})\"></a></li></ul></div></div></div></div>");
  }]);
/* jshint ignore:end */