( function(  ) {
	angular.module("application.todo").controller("todoNewController", todoNewController);

	todoNewController.$inject = ["messagesService", "todoService"];

	function todoNewController(messagesService, todoService){
		// so no scopes here
		var vm = this;

		var addTodo = function(entryText){
			todoService.addEntry(entryText);
		};

		vm.addTodo = addTodo;
	}
})();
