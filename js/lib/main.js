//var scriptsUrl = 'http://localhost:4848/extensions/angularTemplate/';
var scriptsUrl = 'https://localhost:8080/';

console.log('main.js');

/*
* DEPENDANCIES for Sense 2.2.3 - Angular 1.2.15, Bootstrap 3.1.1, jQuery  2.1.3?
* DEPENDANCIES for Sense 3.0 - Angular 1.5.0, Bootstrap 3.3.6, jQuery  2.1.3
*/
require.config({
//  baseUrl: "http://localhost:4848/resources",
baseUrl: "https://qs.itellidemo.dk/resources",

  paths: {
  	'domReady': scriptsUrl +'js/vendor/domReady/domReady',
	'bootstrap': scriptsUrl + 'js/vendor/bootstrap/dist/js/bootstrap.min',
	'app': scriptsUrl + 'js/lib/app',
  'route-segment': scriptsUrl + 'js/vendor/angular-route-segment/angular-route-segment.min',
  'ui-bootstrap': scriptsUrl + 'js/vendor/ui-bootstrap/ui-bootstrap-tpls-2.5.0.min',
//	'ga': scriptsUrl + 'js/lib/ga',
    'controller.main': scriptsUrl + 'js/controllers/main',
    'directive.getObject': scriptsUrl + 'js/directives/getObject',
    'directive.getMenu': scriptsUrl + 'js/directives/getMenu',
    'directive.getSheet': scriptsUrl + 'js/directives/getSheet',
    'directive.dropDown': scriptsUrl + 'js/directives/dropDown',
    'directive.exportToCsv': scriptsUrl + 'js/directives/exportToCsv',
    'directive.visualization': scriptsUrl + 'js/directives/visualization',
    'directive.googleAnnotationChart': scriptsUrl + 'js/directives/googleAnnotationChart',
    'directive.view-segment': scriptsUrl + 'js/directives/view-segment',
	'service.api': scriptsUrl + 'js/services/api',
	'service.utility': scriptsUrl + 'js/services/utilities'
  }
});

define([
    'require',
    'angular',
    'app',
    'route-segment'
], function (require, angular) {
    'use strict';

    // define( "client.services/grid-service", {} );
	app.obj.angularApp = angular.module('myApp', [
		'ngAnimate',
		'ngRoute',
    'route-segment',
    'view-segment'
	]);
/* route segment info >> https://github.com/artch/angular-route-segment  */
  app.obj.angularApp.config(function ($routeSegmentProvider) {
    $routeSegmentProvider.
			when('/',       'default').
      when('/new',    'new').
      when('/sheet',  'sheet' ).
      when('/home',  'home' ).
      segment('default', {
        default: true,
        templateUrl: scriptsUrl+"views/home.html",
        controller: 'controller.main'} ).
      segment('new', {
        templateUrl: scriptsUrl+"views/new.html",
        controller: 'controller.main'} ).
        segment('sheet', {
          templateUrl: scriptsUrl+"views/sheet.html",
          controller: 'controller.main'} ).
       segment('home', {
        templateUrl: scriptsUrl+"views/home.html",
        controller: 'controller.main'} )
		//  	.otherwise({redirectTo: '/'})
	})
/*
	app.obj.angularApp.config(function($routeProvider,$locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: scriptsUrl+"views/home.html",
				controller: 'controller.main'
			} ).when('/new', {
          templateUrl: scriptsUrl+"views/new.html",
          controller: 'controller.main'
      } ).when('/sheet', {
          templateUrl: scriptsUrl+"views/sheet.html",
          controller: 'controller.main'
      } )
			.otherwise({redirectTo: '/'})
	})*/
    require([
    	'domReady!',
    	'js/qlik',
    	'angular',
      'route-segment',
      'ui-bootstrap',
      'directive.view-segment',
//        'ga',
    	'controller.main',
    	'service.api',
    	'service.utility',
      'directive.getObject',
      'directive.getMenu',
      'directive.getSheet',
    	'directive.dropDown',
    	'directive.exportToCsv',
      'directive.visualization',
      'directive.googleAnnotationChart',
    	'bootstrap',
    ], function (document, qlik) {
    	app.obj.qlik = qlik;
		qlik.setOnError( function ( error ) {
			if (!angular.isUndefined(error) && error.code == 16) {
			//	location.reload(); // crazy to reload if errors occuor!
			} else {
				console.log(error);
			}
		} );



        angular.bootstrap( document, ["myApp", "qlik-angular"] );

        app.boot();
    });
});
