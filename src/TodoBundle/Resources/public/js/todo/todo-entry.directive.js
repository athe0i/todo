(function(){
	'use strict';
	angular.module("application.todo").directive("todoEntry", todoEntry);

	function todoEntry(){
		return {
			restrict: "A",
			templateUrl: "todo-entry.html",
			link: function(scope, element, attrs){
				var actionPanelEl = $(element.context).find(".actions-panel");

				$(element.context).find(".edit-btn").click(function(event){
					actionPanelEl.toggle("scale", {
						direction: "horizontal",
						scale: "both",
						duration: 400,
						origin: ["left", "right"]
					});

					event.preventDefault();
					event.stopPropagation();
				});
			}
		};
	}
})();
