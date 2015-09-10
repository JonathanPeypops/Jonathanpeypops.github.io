angular.module('CV.controllers', ['ngRoute'])
    .constant('apiUrl', 'http://localhost:63342/CV/index.html')

    .config(function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'app/views/home.html'
        })

        $routeProvider.when('/info', {
            templateUrl: 'app/views/info.html'
        })

        $routeProvider.otherwise({redirectTo: '/home'})
    })