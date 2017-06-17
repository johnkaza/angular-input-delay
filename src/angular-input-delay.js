'use strict';

/**
 * Directive for delay function on typing angular 1.5 !
 */

angular.module('ngInputDelay', [])
    .directive('inputDelay', ['$timeout', function($timeout) {
      return {
          restrict: "A",
          require: 'ngModel',
          scope: {
              model: '=ngModel',
              onChange: '&?',
              delay: '=delay'
          },
          link: function(scope, element, attrs, controller){

              var timeout = null;

              if (attrs.delay) {
                  scope.seconds = scope.delay;
              } else {
                  scope.seconds = 250;
              }

              scope.$watch('model', function(newValue, oldValue){

                  if (newValue !== oldValue) {
                      if(timeout) {
                          $timeout.cancel(timeout);
                      }

                      timeout = $timeout(function() {

                          scope.update();

                          timeout = null;
                      }, scope.seconds);
                  }

              });

              scope.update = function() {
                  if (this.onChange !== undefined) {
                      scope.onChange();
                  } else {
                      console.error('Function is not defined')
                  }
              };

          }
      };
  };
