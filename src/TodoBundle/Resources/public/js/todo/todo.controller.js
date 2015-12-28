( function(  ) {
	angular("application.todo").controller("todoController", todoController);

	var todoController = function(){
		// so no scopes here
		var vm = this;

		vm.entries = [];

		vm.addTodo = addTodo;

		vm.editTodo = editTodo;

		vm.removeTodo = removeTodo;

		vm.doneTodo = doneTodo;

		vm.undoneTodo = undoneTodo;

		vm.getListTodo = getListTodo;

		var addTodo = function(){
			console.log("send a new todo entry");
		};

		var editTodo = function(){
			console.log("edit existing todo");
		};

		var removeTodo = function(){
			console.log("delete todo entry");
		};

		var doneTodo = function(){
			console.log("mark todo as done");
		};

		var undoneTodo = function(){
			console.log("mark todo as undone");
		};

		var getListTodo = function(){
			console.log("get list of todo entries");
		};
	};
} )();
