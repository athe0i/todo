(function(){
	'use strict';
	angular.module("application.todo").directive("todolist", todoListDirective);

	function todoListDirective(){
		return {
			restrict: "E",
			templateUrl: "todo-list.html"
		};
	}
})();
