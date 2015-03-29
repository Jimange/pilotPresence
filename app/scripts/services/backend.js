'use strict';

/**
 * @ngdoc service
 * @name pilotPresenceApp.Backend
 * @description
 * # Backend
 * Factory in the pilotPresenceApp.
 */
angular.module('pilotPresenceApp')
  .factory('Backend', function ($http) {
    // Service logic
    // ...

    function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

      } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);

      } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

      }
      return xhr;
    }

    var xhr = createCORSRequest('GET', 'http://imi.london/api/');
    if (!xhr) {
      throw new Error('CORS not supported');
    }

    xhr.withCredentials = true;

    xhr.onloadend = function(data){
      console.log('ended',data);
      console.log(xhr.responseText);
    };

    xhr.send();

    // Public API here
    return {
      someMethod: function () {
        return xhr;
      }
    };
  });
