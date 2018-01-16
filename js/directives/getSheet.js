';use strict';

/**
 * @ngdoc function
 * @name myApp.directive: visualization
 * @description
 */
 console.log('getSheet');

app.obj.angularApp
	.directive('getSheet', function($parse, $sce, $compile, $timeout, api,$routeParams) {
		var me = {
			def: {
        restrict: 'AE',
        transclude: true
        // restrict: 'AE',
        // replace: true,
        // terminal: true
			}
		};

		me.boot = function () {
			// Get all the attributes
			me.def.scope = {
				sheetGuid:'='
			};

			me.def.link = function (scope, element, attrs) {
        console.log($routeParams);
        var appid = app.vars.appid ;
        var sheetGuid = app.vars.sheetGuid;

				var html = '';
				var colSize = 100 / 24;
				var rowSize = 100 / 12;

						app.obj[appid].getObject(sheetGuid).then(function(model){
							//this.title = model.properties.title;

						element.html('<div id="sheet-wrapper" style="min-height:100vh;position: relative;" />');
						model.layout.cells.map(function(d) {
										return {
												id: d.name,
												top: d.row * rowSize,
												left: d.col * colSize,
												width: d.colspan * colSize,
												height: d.rowspan * rowSize
										}
								})
								.forEach(function(d) {
									$('<div id="sheet-' + d.id + '" />').css({
										top: 'calc(' + (d.top) + '%)',
										left: 'calc(' + d.left  + '%)',
										width: 'calc(' + d.width + '%)',
										height: 'calc(' + d.height + '%)',
										position: 'absolute'
									}).appendTo('#sheet-wrapper');
												app.obj[appid].getObject('sheet-' + d.id, d.id);
									})
									//element.html(html);
								});
			};
        return me.def;

    };



		return me.boot();
	});
/*
function showSheetObjects(sheetGuid) {
            //    var sheetGuid = $("#Sheets option:selected").data("sheetGuid");
            var i = 0;
            var colSize = 100 / 24;
            var rowSize = 100 / 12;

            app.getObject(sheetGuid).then(function(model) {
                model.layout.cells.map(function(d) {
                        return {
                            id: d.name,
                            top: d.row * rowSize,
                            left: d.col * colSize,
                            width: d.colspan * colSize,
                            height: d.rowspan * rowSize
                        }
                    })
                    .forEach(function(d) {
                        $('#qs-sheet-view').append('<div class="preview-wrapper" id="preview-' + d.id + '" ><span id="select-' + d.id + '" class="glyphicon glyphicon-ok selectedIcon" ></span><div id="show-' + d.id + '" ></div></div>');
                        $('#preview-' + d.id).css({
                            top: 'calc(' + d.top + '%)',
                            left: 'calc(' + d.left + '%)',
                            width: 'calc(' + d.width + '%)',
                            height: 'calc(' + d.height + '%)',
                            position: 'absolute'
                        })

                        app.getObject('show-' + d.id, d.id, {
                            "noInteraction": true,
                            "noSelections": true
                        });
                        $("#preview-" + d.id).click(function() {
                            selectObject($(this).attr('id').replace('preview-', ''))
                            $('#select-' + d.id).toggle();
                            $('#select-' + d.id).toggleClass("selected");
                        });
                        if (selection.indexOf( d.id)!=-1) {
                          $('#select-' + d.id).show();
                          $('#select-' + d.id).addClass("selected");
                        }
                    })
            });
        }
*/
