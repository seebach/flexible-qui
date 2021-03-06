
/**
 * @ngdoc function
 * @name friluftsframjandetApp.controller: api
 * @description
 * # api
 * Controller of the friluftsframjandetApp
 */
console.log('services/api.js');

app.obj.angularApp
.service('api', function ($q, $rootScope, utility) {
	var me = this;

	me.getObjects = function (obj) {
		console.log('getObjects');
		var appid = app.vars.appid ;
		var deferred = $q.defer(),
			promises = [];
//		setTimeout(function(){
			angular.forEach(obj, function(value, key) {
				app.obj.apps[appid].getObject(value, value).then(function(model){
					app.obj.model.push(model);
					deferred.resolve(value);
				});
				promises.push(deferred.promise);
			});
//		}, 500);
		return $q.all(promises);
	};

	me.getSheet = function (id) {
		console.log('getSheet');
		var appid = app.vars.appid ;
		var deferred = $q.defer(),
			promises = [];

		setTimeout(function(){
			// app.getObject(sheetGuid).then(function(model) {
				app.obj.apps[appid].getObject(id).then(function(model){
					//console.log(model);
					app.obj.model.push(model);
					//app.obj.model.push(model);
					deferred.resolve(value);
				});
				promises.push(deferred.promise);
		}, 500);
		return $q.all(promises);
	};


	me.destroyObjects = function () {
		console.log('destroyObjects');
		var appid = app.vars.appid ;
		var deferred = $q.defer();
		var promises = [];
		if (app.obj.model.length >= 1) {
			angular.forEach(app.obj.model, function(value, key) {
				value.close();
				deferred.resolve();
				promises.push(deferred.promise);
			});
			app.obj.model = [];
		}
		if (app.obj.getObjectModel.length >= 1) {
			angular.forEach(app.obj.getObjectModel, function(value, key) {
				value.close();
				deferred.resolve();
				promises.push(deferred.promise);
			});
			app.obj.getObjectModel = [];
		}

		if (app.obj.model.length < 1 && app.obj.getObjectModel.length < 1) {
			deferred.resolve();
			promises.push(deferred.promise);
		}
		return $q.all(promises);


	};
	// To get generic Hypercubes
	me.getHyperCube = function (dimensions, measures, callback, limit) {
		console.log('getHyperCube');
		var appid = app.vars.appid ;
		var qDimensions = [],
			qMeasures = [];
		if (dimensions.length) {
			angular.forEach(dimensions, function(value, key) {
				qDimensions.push({
					qDef: {
						qGrouping: "N",
						qFieldDefs: [ value ],
					},
					qNullSuppression: true,
				});
			});
		}
		if (measures.length) {
			angular.forEach(measures, function(value, key) {
				qMeasures.push({
					qDef : {
						qDef : value
					}
				});
			});
		}
		app.obj[appid].createCube({
			qDimensions : qDimensions,
			qMeasures : qMeasures,
			qInitialDataFetch : [{
				qTop : 0,
				qLeft : 0,
				qHeight : (limit)?limit:500,
				qWidth : 11
			}]
		}, function(reply) {
			utility.log('getMeasureData:', 'Success!');
			callback(reply.qHyperCube.qDataPages[0].qMatrix);
		});
	};

	// Get Hypercube data. Using Promises
	me.getHyperCubeQ = function (dimensions, measures) {
		var qDimensions = [],
			qMeasures = [];
		var appid = app.vars.appid ;

		if (dimensions.length) {
			angular.forEach(dimensions, function(value, key) {
				qDimensions.push({
					qDef: {
						qGrouping: "N",
						qFieldDefs: [ value ],
					}
				});
			});
		}
		if (measures.length) {
			angular.forEach(measures, function(value, key) {
				qMeasures.push({
					qDef : {
						qDef : value
					},
					qSortBy: {
						qSortByState: 0,
						qSortByFrequency: 0,
						qSortByNumeric: 0,
						qSortByAscii: 0,
						qSortByLoadOrder: 0,
						qSortByExpression: 0,
						qExpression: {
							qv: ""
						}
					}
				});
			});
		}
		var deferred = $q.defer();
		app.obj.apps[appid].createCube({
			qDimensions : qDimensions,
			qMeasures : qMeasures,
			qInitialDataFetch : [{
				qTop : 0,
				qLeft : 0,
				qHeight : 500,
				qWidth : 11
			}]
		}, function(reply) {
			utility.log('getHyperCubeQ:', 'Success!');
			deferred.resolve(reply.qHyperCube.qDataPages[0].qMatrix);
		});
		return deferred.promise;

	};

	me.getTable = function(dimensions, measures, options) {
		var appid = app.vars.appid ;
		return app.obj.apps[appid].createTable(dimensions, measures, options);
	}

	// To get list of data
	me.createList = function (field, callback, limit) {
		console.log(field);
		var appid = app.vars.appid ;
		app.obj.apps[appid].createList({
			qDef: {
				qFieldDefs: field
			},
			qInitialDataFetch : [{
				qTop : 0,
				qLeft : 0,
				qHeight : (limit)?limit:500,
				qWidth : 1
			}]
		}, function(reply) {
			utility.log('createList:', 'Success!');
			callback(reply.qListObject.qDataPages[0].qMatrix);
		});
	};

});
