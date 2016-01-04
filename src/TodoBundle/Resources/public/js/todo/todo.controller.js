( function(  ) {
	angular.module("application.todo").controller("todoController", todoController);

	todoController.$inject = ["messagesService", "todoService"];

	function todoController(messagesService, todoService){
		// so no scopes here
		var vm = this;
		vm.entries = [];

		vm.getListTodo = getListTodo;
		function getListTodo(){
			vm.entries = todoService.getList();
		};

		// get initial data
		vm.getListTodo();
	};
} )();
