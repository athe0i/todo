(function(){
	'use strict';

	// just wanna try something which not a component itself, but kind an action or manipulator for an element
	angular.module("application.components").directive("cmpTooltip", cmpTooltipDirective);

	function cmpTooltipDirective(){
		return {
			restrict: "A",
			scope: {},
			link: linkFn,
			template: ""
		};

		function linkFn(scope, element, attrs){
			$(element[0]).tooltip();
		}
	}
})();
