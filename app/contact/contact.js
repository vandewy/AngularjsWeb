'use strict';

angular.module('contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])



.controller('ContactCtrl', ['$scope', function($scope, $http, $log) {


    $scope.submit = function(form) {
        // Trigger validation flag.
        $scope.submitted = true;

        var name = $scope.name;
        var email = $scope.email;
        var message = $scope.message;
        console.log(name);
        console.log(email);
        console.log(message);

        var sql = require('sqlite3');
        var mailer = require('nodemailer');



        if(String(email) == "undefined"){
            console.log("invalid email");
        }



    };
}]);
