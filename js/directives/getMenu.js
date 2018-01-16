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
			};
      console.log('getMenu2');


			me.def.link = function (scope, element, attrs) {

        var menuitems = [
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
           var href = '#/app/'+value['app']+'/'+value['link'];
           var path = '/app/'+value['app']+'/'+value['link'];
           if (value['submenu']==='no') {
             // ng-class="{active: activetab=='/lab'}"

//             html += '<li class="nav-item" ng-class="{active:isActive(\''+path+'\')}" ><a href="'+href+'" class"nav-link" role="tab">'+value['name']+'</a></li>';
//          html += '<li class="nav-item" ng-class="{active: activetab==\''+path+'\'}" ><a href="'+href+'" class"nav-link" role="tab">'+value['name']+'</a></li>';
             html += '<li class="nav-item" active-tab="2" ><a href="'+href+'" class"nav-link" role="tab">'+value['name']+'</a></li>';
           } else {
             html += '<li class="nav-item dropdown">';
               html += '<a class="dropdown-toggle nav-link" data-toggle="dropdown" role="tab" href="#/'+value['link']+'">'+value['name']+' <span class="caret"></span></a>';
               html += '<ul class="dropdown-menu">';
                 value['submenu'].forEach(function(subvalue, subkey) {
                   var subhref = '#/app/'+subvalue['app']+'/'+subvalue['link'];
                   html += '<li ><a href="'+subhref+'" class="dropdown-item nav-link">'+subvalue['name']+'</a></li>';
                 });
               html += '</ul>';
             html += '</li>';
           }

           // class="active"

         });

        html += '</ul>';

        element.html(html);

		};
    return me.def;
    	};
		return me.boot();

});
