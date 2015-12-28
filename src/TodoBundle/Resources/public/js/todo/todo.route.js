( function(  ) {
	'use strict';

	angular.module("application.todo").config(configRouting);

	var configRouting = function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise("/todo");

		$stateProvider
			.state(
				"todo",{
					controller: "todoController as todoCtrl",
					url: "/todo",
					templateUrl: "/todo.html"
				}
			);
	};
} )();
