'use strict';

/**
 * @ngdoc service
 * @name konbawaApp.StoreLocal
 * @description
 * # StoreLocal
 * Factory in the konbawaApp.
 */
angular.module('pilotPresenceApp')
  .factory('StoreLocal', function () {
    // Service logic

    // Public API here
    return {
      setItem: function (item, value) {
        var jsonValue = JSON.stringify(value);
        localStorage.setItem(item, jsonValue);
      },
      getItem: function(item){
        var jsonValue = localStorage.getItem(item);
        if(jsonValue === 'undefined') {
          return;
        }
        return JSON.parse(jsonValue);
      },
      removeItem: function(item){
        return localStorage.removeItem(item);
      }
    };
  });