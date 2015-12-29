(function(){
	'use strict';
	angular.module("application.todo").directive("todonew", todoNewDirective);

	function todoNewDirective(){
		return {
			restrict: "E",
			templateUrl: "todo-new.html"
		};
	}
})();
