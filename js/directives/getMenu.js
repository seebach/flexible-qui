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
	.directive('getMenu', function( $parse, $sce, $compile, $timeout, api,menu) {
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
        var html = '';

        html += '<ul class="nav nav-tabs">';

        menu.getMenu().forEach(function(value, key) {
           var href = '#/app/'+value['app']+'/'+value['link'];
           var path = '/app/'+value['app']+'/'+value['link'];
           if (value['submenu']==='no') {
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
