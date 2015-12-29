(function(){
	'use strict';
	angular.module("application.todo").directive("todoListDirective", todoListDirective);

	function todoListDirective(){
		return {
			restrict: "A",
			templateUrl: "todo-list.html"
		};
	}
})();
