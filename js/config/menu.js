'use strict';

/**
 * @ngdoc function
 * @name friluftsframjandetApp.controller: controllers.utility
 * @description
 * # Utility
 * Controller of the friluftsframjandetApp
 */


app.obj.angularApp
.service('menu', function () {
	var me = this;

	me.getMenu = function () {
		console.log('comfig/menu.js');

		return [
			{name:'Home',link:'home',submenu:'no',app:'sales'},
			{name:'Opportunity',link:'sheet',app:'sales',
				submenu:
				[
				{name:'Dashboard',link:'sheet/FfQzt',app:'sales'},
				{name:'Trend',link:'sheet/dWbmmp',app:'sales'},
				{name:'Pipeline',link:'sheet/600e9c8f-1f6e-4c4d-864b-9179fd2ef206',app:'sales'},

				{name:'Propability',link:'sheet/793828b2-5355-4627-ab79-921e0adcaa14',app:'sales'},
				{name:'Details',link:'sheet/sjUEcN',app:'sales'}
			]
		},
			{name:'Value of Deals',link:'value-of-deals',submenu:'no',app:'sales'},
			{name:'Different App',link:'sheet/1ff88551-9c4d-41e0-b790-37f4c11d3df8',submenu:'no',app:'executive'},
			{name:'Propability 2',link:'sheet/793828b2-5355-4627-ab79-921e0adcaa14',submenu:'no',app:'sales'},
		]
	}


});
