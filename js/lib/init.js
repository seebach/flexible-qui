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
  'ui-bootstrap': scriptsUrl + 'js/vendor/ui-bootstrap/ui-bootstrap-tpls-2.5.0.min',
//	'ga': scriptsUrl + 'js/lib/ga',
  'config.menu': scriptsUrl + 'js/config/menu',
    'controller.main': scriptsUrl + 'js/controllers/main',
    'directive.getObject': scriptsUrl + 'js/directives/getObject',
    'directive.getMenu': scriptsUrl + 'js/directives/getMenu',
    'directive.getSheet': scriptsUrl + 'js/directives/getSheet',
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
		'ngRoute'
	]);

  app.obj.angularApp.config(function($routeProvider,$locationProvider) {

		$routeProvider
        .when('/', {
          templateUrl: scriptsUrl+"views/home.html",
          controller: 'controller.main'
        } ).when('/app/:appid/home', {
    				templateUrl: scriptsUrl+"views/home.html",
    				controller: 'controller.main'
    			} ).when('/app/:appid/value-of-deals', {
          templateUrl: scriptsUrl+"views/new.html",
          controller: 'controller.main'
/*      } ).when('/app/:appid/sheet', {
          templateUrl: scriptsUrl+"views/sheet.html",
          controller: 'controller.main' */
      } ).when('/app/:appid/sheet/:sheetGuid', {
          templateUrl: scriptsUrl+"views/sheet.html",
          controller: 'controller.main'
      } )
			.otherwise({redirectTo: '/'})
      //$locationProvider.html5Mode(true);

      console.log($routeProvider);
	})

    require([
    	'domReady!',
    	'js/qlik',
    	'angular',
      'config.menu',
      'ui-bootstrap',
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
