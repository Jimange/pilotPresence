'use strict';

/**
 * @ngdoc service
 * @name pilotPresenceApp.storeLocal
 * @description
 * # storeLocal
 * Factory in the pilotPresenceApp.
 */
angular.module('pilotPresenceApp')
  .factory('StoreLocal', function () {
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
