
/**
 * @ngdoc function
 * @name friluftsframjandetApp.controller: api
 * @description
 * # api
 * Controller of the friluftsframjandetApp
 */
<<<<<<< HEAD
console.log('services/api.js');

app.obj.angularApp
.service('api', function ($q, $rootScope, utility) {
	var me = this;

=======
app.obj.angularApp
.service('api', function ($q, $rootScope, utility) {
	var me = this;
			
>>>>>>> origin/master
	me.getObjects = function (obj) {
		var deferred = $q.defer(),
			promises = [];

<<<<<<< HEAD
		setTimeout(function(){
=======
		setTimeout(function(){ 
>>>>>>> origin/master
			angular.forEach(obj, function(value, key) {
				app.obj.app.getObject(value, value).then(function(model){
					app.obj.model.push(model);
					deferred.resolve(value);
				});
				promises.push(deferred.promise);
			});
		}, 500);
		return $q.all(promises);
<<<<<<< HEAD
		console.log('services/api.js getObjects');
=======
>>>>>>> origin/master
	};

	me.destroyObjects = function () {
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
<<<<<<< HEAD
		}
=======
		} 
>>>>>>> origin/master
		if (app.obj.model.length < 1 && app.obj.getObjectModel.length < 1) {
			deferred.resolve();
			promises.push(deferred.promise);
		}
		return $q.all(promises);
<<<<<<< HEAD
		console.log('services/api.js destroyObjects');

	};

=======
	};
	
>>>>>>> origin/master
	// To get generic Hypercubes
	me.getHyperCube = function (dimensions, measures, callback, limit) {
		var qDimensions = [],
			qMeasures = [];
		if (dimensions.length) {
			angular.forEach(dimensions, function(value, key) {
<<<<<<< HEAD
				qDimensions.push({
					qDef: {
						qGrouping: "N",
						qFieldDefs: [ value ],
					},
					qNullSuppression: true,
=======
				qDimensions.push({ 
					qDef: { 
						qGrouping: "N", 
						qFieldDefs: [ value ], 
					},
					qNullSuppression: true, 
>>>>>>> origin/master
				});
			});
		}
		if (measures.length) {
			angular.forEach(measures, function(value, key) {
<<<<<<< HEAD
				qMeasures.push({
					qDef : {
=======
				qMeasures.push({ 
					qDef : { 
>>>>>>> origin/master
						qDef : value
					}
				});
			});
		}
		app.obj.app.createCube({
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
<<<<<<< HEAD
		console.log('services/api.js getHyperCube');
=======
>>>>>>> origin/master
	};

	// Get Hypercube data. Using Promises
	me.getHyperCubeQ = function (dimensions, measures) {
		var qDimensions = [],
			qMeasures = [];
		if (dimensions.length) {
			angular.forEach(dimensions, function(value, key) {
<<<<<<< HEAD
				qDimensions.push({
					qDef: {
						qGrouping: "N",
						qFieldDefs: [ value ],
					}
=======
				qDimensions.push({ 
					qDef: { 
						qGrouping: "N", 
						qFieldDefs: [ value ], 
					} 
>>>>>>> origin/master
				});
			});
		}
		if (measures.length) {
			angular.forEach(measures, function(value, key) {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/master
				});
			});
		}
		var deferred = $q.defer();
		app.obj.app.createCube({
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
<<<<<<< HEAD
		console.log('services/api.js getHyperCubeQ');
	};

=======
	};
	
>>>>>>> origin/master
	me.getTable = function(dimensions, measures, options) {
		return app.obj.app.createTable(dimensions, measures, options);
	}

	// To get list of data
	me.createList = function (field, callback, limit) {
		console.log(field);
		app.obj.app.createList({
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
<<<<<<< HEAD
		console.log('services/api.js createList');
	};

	// Add Google tracking
	me.ga = function (title) {
		//ga('send', 'event', 'button', 'click', title, 1);
	};
	console.log('services/api.js done');

});
=======
	};
	
	// Add Google tracking
	me.ga = function (title) {
		ga('send', 'event', 'button', 'click', title, 1);
	};
});
>>>>>>> origin/master
