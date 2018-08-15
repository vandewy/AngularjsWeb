'use strict';


angular.module('process', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/process', {
            templateUrl: 'process/process.php',
            controller: 'ProcessCtrl'
        });
    }])

    .controller('ProcessCtrl', ['$scope', function($scope, $http, $log) {

    }]);