'use strict';

angular.module('towersim', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/towersim', {
    templateUrl: 'towersim/towersim.html',
    controller: 'TowersimCtrl'
  });
}])

.controller('TowersimCtrl', [function($scope) {
    $scope.vidurl = "../../public/img/tower_concept.mp4";


}]);