(function(){
	'use strict';
	angular.module("application.todo").directive("todoNewDirective", todoNewDirective);

	function todoNewDirective(){
		return {
			restrict: "A",
			templateUrl: "todo-new.html",
			scope: {},
			controller: "todoNewController",
			controllerAs: "ctrl",
			bindTo: "controller"
		};
	}
})();
