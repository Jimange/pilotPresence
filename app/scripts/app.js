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
    ;

    //Google map API
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBWdclaCvBCuCUBnBzFetjc6ficgFa492w',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  })
;
