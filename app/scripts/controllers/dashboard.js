'use strict';

/**
 * @ngdoc function
 * @name pilotPresenceApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the pilotPresenceApp
 */
angular.module('pilotPresenceApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.user = {
      name: 'Lauriane Kayungu',
      picture: '//s.gravatar.com/avatar/9abae84805c1e605f9ba30febbe32891?s=80'
    };

    var today = new Date();
    console.log(today);
    $scope.bookings = [
      {date:today, time: today, pilotBot: 'Lestrade', location:'Birmingham'},
      {date:new Date(2015, 3, 3), time: new Date(2015, 3, 3), pilotBot: 'Lestrade', location:'London'},
      {date:new Date(2015, 3, 24), time: new Date(2015, 3, 24), pilotBot: 'Lestrade', location: 'Paris'},
    ];

  });
