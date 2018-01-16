'use strict';

/**
 * @ngdoc function
 * @name friluftsframjandetApp.controller:controller.dashboard
 * @author yianni.ververis@qlik.com
 * @description
 * # controller.dashboard
 * Controller of the myApp
 */
 console.log('main');

app.obj.angularApp
	.controller('controller.main', function ($scope, $rootScope,$location, $injector,$routeParams, api, utility) {
		var me = {};

		$scope.isActive = function(route) {
        return route === $location.path();
    }
		// set default for which app we are using
		app.vars.prevAppid = app.vars.appid;
		app.vars.appid = $routeParams.appid;

		if (app.vars.appid.length<2) { console.log('no app selected'); return; }

		app.vars.sheetGuid  = $routeParams.sheetGuid;

		// align selections
		/*
		if(app.vars.prevAppid!=app.vars.appid ) {
		// if we change app, the check selections to align
		var selectionFields = [];
			// find fields to align
			for (var eachapp in app.obj.apps) {
				console.log(app.obj.apps[eachapp].selectionState( ).selections); // we need to access this array???
				for (var selection in app.obj.apps[eachapp].selectionState( ).selections) {
					console.log(app.obj.apps[eachapp].selectionState( ).selections[0]);
					switch (app.obj.apps[eachapp].selectionState( ).selections.fieldName[selection]) {
					    case 'Opportunity Close Quarter 2':
					    case 'Quarter':
					       selectionFields.push(app.obj.apps[eachapp].selectionState( ).selections.fieldName);
								 console.log(app.obj.apps[eachapp].selectionState( ).selections.fieldName);

					}
				}
				// selectionFields = app.obj.apps[eachapp].selectionState( ).selections.fieldName;

			}
			console.log(selectionFields);

		}
*/
		me.init = function () {
			me.measures = [];


		}

		me.boot = function () {
			me.init();
			me.events();
			me.createKpis();
			// me.getObjects();
			// CurrentSelections

			// For debugging selections uncommment the line below
			app.obj.apps[app.vars.appid].getObject('CurrentSelections', 'CurrentSelections');
			utility.log('Page loaded: ', $scope.page);
		};

		me.events = function () {

			me.createKpis = function() {
				angular.forEach(me.measures, function(value, key) {
					api.getHyperCube([], [value[0]], function(data){
						$scope.kapi[key] = (value[1])?utility.string2thousands(data[0][0].qText):data[0][0].qText;
					});
				});
			}
			$rootScope.clearAll = function () {
				app.obj.apps[app.vars.appid].clearAll();
			}
			$rootScope.goTo = function(page) {
				api.destroyObjects().then(function(){
					$location.url('/' + page);
				});
			}
		}

		me.boot();
	});
