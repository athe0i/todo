( function(  ) {
	angular.module("application.todo").controller("todoController", todoController);

	todoController.$inject = ["messagesService", "todoService"];

	function todoController(messagesService, todoService){
		// so no scopes here
		var vm = this;

		vm.entries = todoService.getList();

		var addTodo = function(entryText){
			todoService.addEntry(entryText);
		};

		var getListTodo = function(){
			console.log("get list of todo entries");
		};

		vm.addTodo = addTodo;
		vm.getListTodo = getListTodo;
	};
} )();
