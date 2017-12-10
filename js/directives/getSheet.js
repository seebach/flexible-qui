';use strict';

/**
 * @ngdoc function
 * @name myApp.directive: visualization
 * @description
 * Creating an element rom the Visualization API
 * https://help.qlik.com/en-US/sense-developer/3.0/Subsystems/APIs/Content/VisualizationAPI/VisualizationAPI.htm
 * Available visualization types
 * barchart
 * combochart
 * gauge
 * kpi
 * linechart
 * piechart
 * pivot-table
 * scatterplot
 * table
 * treemap
 * Controller of the myApp
 */
 console.log('getSheet');

app.obj.angularApp
	.directive('getSheet', function($parse, $sce, $compile, $timeout, api) {
		var me = {
			def: {
				restrict: 'AE',
        		replace: true,
                terminal: true
			}
		};

		me.boot = function () {
			// Get all the attributes
			me.def.scope = {
				id: '=',
				sheetGuid:'=',
				title: '=',
				type: '=',
				columns: '=',
				height: '='
			};

			me.def.link = function (scope, element, attrs) {
				var html = '';
				var colSize = 100 / 24;
				var rowSize = 100 / 12;
				var sheetGuid = '600e9c8f-1f6e-4c4d-864b-9179fd2ef206';
				//scope.$watch('sheetId',function(newValue,oldValue) {
					// Inject the template into the DOM

				console.log(element);

					//app.getSheet(sheetGuid).then(function(model){
					//	console.log(model);
						app.obj.app.getObject(sheetGuid).then(function(model){
							//this.title = model.properties.title;
							//console.log(model.layout.cells);

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
										//app.obj.app	.getObject('#sheet-' + d.id, d.id);
												app.obj.app	.getObject('sheet-' + d.id, d.id);
												console.log('getSheet object success');

									})
									//console.log(html);
									//element.html(html);

								});
				//});
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
