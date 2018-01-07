';use strict';

/**
 * @ngdoc function
 * @name myApp.directive: visualization
 * @description
 */
 console.log('getMenu');

app.obj.angularApp
	.directive('getMenu', function($parse, $sce, $compile, $timeout, api) {
		var me = {
			def: {
				restrict: 'AE',
        		replace: true
			}
		};

		me.boot = function () {
			// Get all the attributes
			me.def.scope = {
			     id: '='
			};
      console.log('getMenu2');


			me.def.link = function (scope, element, attrs) {
        var values = {name: 'misko', gender: 'male'};

        var menuitems = [
  		    {name:'Home',link:'/home'},
  		    {name:'Sheet',link:'/sheet'},
  		    {name:'New',link:'/new'}
  		  ];

        var html = '';
        html += '<div class="tab">';

        menuitems.forEach(function(value, key) {
          //onclick="window.location='http://www.example.com';"
            html += '<button class="tablinks"  ng-class="{active: $routeSegment.startsWith("'+value['link']+'")}" onclick="window.location=\'#'+value['link']+'\'">'+value['name']+'</button>';
        });
        //var html = '<li role="menuitem" ng-repeat="item in menuitems"><a href="#">{{item}}</a></li>';
        html += '</div>';

        element.html(html);

        console.log(html);
        //element.html(html);


      console.log(element);

		};
    return me.def;
    	};
		return me.boot();

});
