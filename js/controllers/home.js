'use strict';

<<<<<<< HEAD
/**
=======
/** 
>>>>>>> origin/master
 * @ngdoc function
 * @name friluftsframjandetApp.controller:controller.dashboard
 * @author yianni.ververis@qlik.com
 * @description
 * # controller.dashboard
 * Controller of the myApp
 */
<<<<<<< HEAD
console.log('home.js');

=======
>>>>>>> origin/master
app.obj.angularApp
	.controller('controller.home', function ($scope, $rootScope, $location, $injector, api, utility) {
		var me = {};

		me.init = function () {
			me.measures = [
<<<<<<< HEAD
			//	["Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )", false]
			];
			$scope.kapi = [];
			//me.objects = ['ycppXj'];
		}

		me.boot = function () {
			me.init();

=======
				["Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )", false]
			];
			$scope.kapi = [];
			me.objects = ['ycppXj'];
		}
		
		me.boot = function () {
			me.init();
			
>>>>>>> origin/master
			me.events();

			me.createKpis();
			// me.getObjects();

			// For debugging selections uncommment the line below
			app.obj.app.getObject('CurrentSelections', 'CurrentSelections');
			utility.log('Page loaded: ', $scope.page);
		};

		me.events = function () {
			// me.getObjects = function () {
			// 	api.destroyObjects().then(function(){
			// 		api.getObjects(me.objects);
			// 	})
			// }
			me.createKpis = function() {
				angular.forEach(me.measures, function(value, key) {
					api.getHyperCube([], [value[0]], function(data){
						$scope.kapi[key] = (value[1])?utility.string2thousands(data[0][0].qText):data[0][0].qText;
					});
				});
			}
			$rootScope.clearAll = function () {
				app.obj.app.clearAll();
			}
			$rootScope.goTo = function(page) {
				api.destroyObjects().then(function(){
					$location.url('/' + page);
				});
			}
		}

		me.boot();
	});
<<<<<<< HEAD
	console.log('home.js done');
=======
>>>>>>> origin/master
