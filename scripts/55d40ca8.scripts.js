"use strict";angular.module("siteApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("siteApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);