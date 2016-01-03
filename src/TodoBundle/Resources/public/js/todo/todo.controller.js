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

		var editTodo = function(){
			messagesService.log("edit", "warn");
		};

		var removeTodo = function(){
			console.log("delete todo entry");
		};

		var doneTodo = function(entry){
			todoService.doneEntry(entry);
		};

		var undoneTodo = function(entry){
			todoService.undoneEntry(entry);
		};

		var getListTodo = function(){
			console.log("get list of todo entries");
		};

		vm.addTodo = addTodo;

		vm.editTodo = editTodo;

		vm.removeTodo = removeTodo;

		vm.doneTodo = doneTodo;

		vm.undoneTodo = undoneTodo;

		vm.getListTodo = getListTodo;
	};
} )();
