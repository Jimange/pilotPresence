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
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: '',
        controller: ''
      })
      .state('auth', {
        url: '/login',
        templateUrl: '',
        controller: ''
      })
      .state('booking', {
        url: '/booking',
        templateUrl: '',
        controller: ''
      });
  })
;
