'use strict';

/**
 * @ngdoc function
 * @name friluftsframjandetApp.controller: controllers.utility
 * @description
 * # Utility
 * Controller of the friluftsframjandetApp
 */
<<<<<<< HEAD
console.log('utilities.js');

=======
>>>>>>> origin/master
app.obj.angularApp
.service('utility', function ($q, $window, $location) {
	var me = this;

	// Convert 10000 into 10,000
	me.string2thousands = function (string) {
		if (_.isNumber(string)){
			string = string.toString();
		}
		if (string.length >= 6 ) {
			return string.replace(/(\d+)(\d{3})(\d{3})/, '$1' + ',' + '$2' + ',' + '$3');
		} else {
			return string.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
		}
	}

	// Custom Logger
	me.log = function (type, message) {
		console.log('%c ' + type + ': ', 'color: red', message);
<<<<<<< HEAD
	//	$window.ga('send', 'pageview', $location.path());
	};

});
=======
		$window.ga('send', 'pageview', $location.path());
	};

});
>>>>>>> origin/master
