(function(){
	'use strict';
	angular.module("application.todo").directive("todoEntry", todoEntry);

	function todoEntry(){
		return {
			restrict: "A",
			templateUrl: "todo-entry.html",
			controller: "todoEntryController",
			controllerAs: "ctrl",
			scope: {
				entry: "="
			},
			link: function(scope, element, attrs){
				scope.showEdit = function(){
					element.find(".entry-text").hide();
					element.find(".entry-edit").show();
				};

				scope.hideEdit = function(){
					element.find(".entry-text").show();
					element.find(".entry-edit").hide();
				};
			},
			bindTo: "controller"
		};
	}
})();
