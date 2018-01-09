';use strict';

/**
 * @ngdoc function
 * @name myApp.directive: visualization
 * @description

 *
 *@Todo
 * Mark an menu items as active on reload
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

        var menuitems = [
  		    {name:'Home',link:'home',submenu:'no'},
  		    {name:'Opportunity',link:'sheet',
            submenu:
            [
            {name:'Dashboard',link:'FfQzt'},
            {name:'Trend',link:'dWbmmp'},
            {name:'Pipeline',link:'600e9c8f-1f6e-4c4d-864b-9179fd2ef206'},

            {name:'Propability',link:'793828b2-5355-4627-ab79-921e0adcaa14'},
            {name:'Details',link:'sjUEcN'}
          ]
        },
  		    {name:'Value of Deals',link:'value-of-deals',submenu:'no'}
  		  ];

        var html = '';
/*
        html += '<div class="tab">';

        menuitems.forEach(function(value, key) {
          //onclick="window.location='http://www.example.com';"
            html += '<button class="tablinks"  ng-class="{active: $routeSegment.startsWith("'+value['link']+'")}" onclick="window.location=\'#'+value['link']+'\'">'+value['name']+'</button>';
        });
        //var html = '<li role="menuitem" ng-repeat="item in menuitems"><a href="#">{{item}}</a></li>';
        html += '</div>';
*/
        html += '<ul class="nav nav-tabs">';

        menuitems.forEach(function(value, key) {
          if (value['submenu']==='no') {
            html += '<li class="nav-item" ng-class="{active: $routeSegment.startsWith(\''+value['link']+'\')}" ><a href="#/'+value['link']+'" class"nav-link" role="tab">'+value['name']+'</a></li>';
          } else {
            html += '<li class="nav-item dropdown">';
              html += '<a class="dropdown-toggle nav-link" data-toggle="dropdown" role="tab" href="#/'+value['link']+'">'+value['name']+' <span class="caret"></span></a>';
              html += '<ul class="dropdown-menu">';
                value['submenu'].forEach(function(subvalue, subkey) {
                  html += '<li ><a href="#/'+value['link']+'/'+subvalue['link']+'" class="dropdown-item nav-link">'+subvalue['name']+'</a></li>';
                });
              html += '</ul>';
            html += '</li>';
          }

          // class="active"

        //  <li><a href="#">Menu 2</a></li>
        //  <li><a href="#">Menu 3</a></li>
        });

        html += '</ul>';

        element.html(html);

		};
    return me.def;
    	};
		return me.boot();

});
