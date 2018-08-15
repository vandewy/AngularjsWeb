'use strict';


angular.module('contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    Url: 'contact/process.php',
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

        //var sql = require('sqlite3');
        //var mailer = require('nodemailer');

        //var db = new sql.Database('./messages.db');
        //var date = Date();

        //db.run('INSERT INTO messages(user_name, user_email, message, date) VALUES(?,?,?,?)', [name, email, message, date]);


        //db.close();
        //if(String(email) == "undefined"){
            //console.log("invalid email");
        //}



    };
}]);
