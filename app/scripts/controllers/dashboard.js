'use strict';

/**
 * @ngdoc function
 * @name pilotPresenceApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the pilotPresenceApp
 */
angular.module('pilotPresenceApp')
  .controller('DashboardCtrl', function ($scope, uiGmapGoogleMapApi, Backend) {
    $scope.user = {
      name: 'Lauriane Kayungu',
      picture: '//s.gravatar.com/avatar/9abae84805c1e605f9ba30febbe32891?s=80'
    };

    $scope.map = {};

    uiGmapGoogleMapApi.then(function(/*maps*/) {
      $scope.map = { center: { latitude: 51.494455, longitude: -0.087866 }, zoom: 7 };
    });

    var today = new Date();
    console.log(today);
    $scope.bookings = [
      {startDate:new Date(2015, 2, 29, 8), endDate: new Date(2015, 2, 29, 10, 30), beamName: 'Lestrade', location:'Birmingham'},
      {startDate:new Date(2015, 3, 3, 15), endDate: new Date(2015, 3, 3, 15, 30), beamName: 'Lestrade', location:'London'},
      {startDate:new Date(2015, 3, 24, 13), endDate: new Date(2015, 3, 24, 16), beamName: 'Lestrade', location: 'Brussels'},
    ];

    Backend.someMethod();
  });
