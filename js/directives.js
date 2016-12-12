angular.module('TodoDirective',[]).directive('todoCalender', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/directives/Jan.html'
  };
});
