(function(){
	'use strict';
	angular.module("application.todo").directive("todoDirective", todoDirective);

	function todoDirective(){
		return {
			restrict: "A",
			templateUrl: "todo.html"
		};
	}
})();
