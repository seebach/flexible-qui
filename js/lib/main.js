//var scriptsUrl = 'http://localhost:4848/extensions/angularTemplate/';
var scriptsUrl = 'http://localhost:8080/';
<<<<<<< HEAD
console.log('main.js');
/*
=======

/* 
>>>>>>> origin/master
* DEPENDANCIES for Sense 2.2.3 - Angular 1.2.15, Bootstrap 3.1.1, jQuery  2.1.3?
* DEPENDANCIES for Sense 3.0 - Angular 1.5.0, Bootstrap 3.3.6, jQuery  2.1.3
*/
require.config({
<<<<<<< HEAD
//  baseUrl: "http://localhost:4848/resources",
baseUrl: "http://qs.itellidemo.dk/resources",
=======
  baseUrl: "http://localhost:4848/resources",
>>>>>>> origin/master
  paths: {
  	'domReady': scriptsUrl +'js/vendor/domReady/domReady',
	'bootstrap': scriptsUrl + 'js/vendor/bootstrap/dist/js/bootstrap.min',
	'app': scriptsUrl + 'js/lib/app',
<<<<<<< HEAD
//	'ga': scriptsUrl + 'js/lib/ga',
=======
	'ga': scriptsUrl + 'js/lib/ga',
>>>>>>> origin/master
    'controller.home': scriptsUrl + 'js/controllers/home',
    'directive.getObject': scriptsUrl + 'js/directives/getObject',
    'directive.dropDown': scriptsUrl + 'js/directives/dropDown',
    'directive.exportToCsv': scriptsUrl + 'js/directives/exportToCsv',
    'directive.visualization': scriptsUrl + 'js/directives/visualization',
    'directive.googleAnnotationChart': scriptsUrl + 'js/directives/googleAnnotationChart',
	'service.api': scriptsUrl + 'js/services/api',
	'service.utility': scriptsUrl + 'js/services/utilities'
  }
});

define([
    'require',
    'angular',
    'app'
], function (require, angular) {
    'use strict';

    // define( "client.services/grid-service", {} );
	app.obj.angularApp = angular.module('myApp', [
		'ngAnimate',
		'ngRoute',
	]);
	app.obj.angularApp.config(function($routeProvider,$locationProvider) {
		$routeProvider
<<<<<<< HEAD
			.when('/', {
				templateUrl: scriptsUrl+"views/home.html",
				controller: 'controller.home'
			} ).when('/new', {
                templateUrl: scriptsUrl+"views/new.html",
                controller: 'controller.home'
=======
			.when('/', { 
				templateUrl: scriptsUrl+"views/home.html",
				controller: 'controller.home' 
			} ).when('/new', { 
                templateUrl: scriptsUrl+"views/new.html",
                controller: 'controller.home' 
>>>>>>> origin/master
            } )
			.otherwise({redirectTo: '/'})
	})
    require([
<<<<<<< HEAD
    	'domReady!',
    	'js/qlik',
    	'angular',
//        'ga',
=======
    	'domReady!', 
    	'js/qlik',
    	'angular',
        'ga',
>>>>>>> origin/master
    	'controller.home',
    	'service.api',
    	'service.utility',
        'directive.getObject',
    	'directive.dropDown',
    	'directive.exportToCsv',
        'directive.visualization',
        'directive.googleAnnotationChart',
    	'bootstrap',
    ], function (document, qlik) {
    	app.obj.qlik = qlik;
		qlik.setOnError( function ( error ) {
			if (!angular.isUndefined(error) && error.code == 16) {
<<<<<<< HEAD
			//	location.reload();
=======
				location.reload();
>>>>>>> origin/master
			} else {
				console.log(error);
			}
		} );

        angular.bootstrap( document, ["myApp", "qlik-angular"] );

        app.boot();
    });
});
<<<<<<< HEAD
console.log('main.js done');
=======
>>>>>>> origin/master
