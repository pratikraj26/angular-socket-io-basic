var app = angular.module('app', ['ngRoute','lumx'])

.config(function ($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'views/index.html',
    controller: 'IndexCtrl',
  })

  .when('/index', {
    templateUrl: 'views/index.html',
    controller: 'IndexCtrl',
  })

  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
  })

  .when('/404', {
    templateUrl: 'views/404.html'
  })

  .otherwise({
    redirectTo: '/404'
  });

  $locationProvider.html5Mode(true);
});
