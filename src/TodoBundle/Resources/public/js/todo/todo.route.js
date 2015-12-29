( function(  ) {
	'use strict';

	angular.module("application.todo").config(config);

	config.$inject = ["$stateProvider", "$urlRouterProvider"];

	function config($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state(
				"todo",{
					controller: "todoController as todoCtrl",
					url: "/",
					//templateUrl: "todo.html"
					template: "<todo></todo>"
				}
			);
	};

} )();
