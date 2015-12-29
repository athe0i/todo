(function(){
	'use strict';
	angular.module("application.todo").directive("todo", todoDirective);

	function todoDirective(){
		return {
			restrict: "E",
			templateUrl: "todo.html"
		};
	}
})();
