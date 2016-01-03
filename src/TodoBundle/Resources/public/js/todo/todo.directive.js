(function(){
	'use strict';
	angular.module("application.todo").directive("todoDirective", todoDirective);

	//todoDirective.$inject = ["cmp-tooltip"];

	function todoDirective(){
		return {
			restrict: "A",
			templateUrl: "todo.html"
		};
	}
})();
