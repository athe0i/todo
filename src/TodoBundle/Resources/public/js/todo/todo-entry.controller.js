( function(  ) {
	angular.module("application.todo").controller("todoEntryController", todoEntryController);

	todoEntryController.$inject = ["messagesService", "todoService"];

	function todoEntryController(messagesService, todoService){
		var vm = this;

		var editTodo = function(entry){
			todoService.editEntry(entry);
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

		vm.editTodo = editTodo;

		vm.removeTodo = removeTodo;

		vm.doneTodo = doneTodo;

		vm.undoneTodo = undoneTodo;
	}
})();
