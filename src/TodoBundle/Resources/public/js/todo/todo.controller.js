( function(  ) {
	angular.module("application.todo").controller("todoController", todoController);

	todoController.$inject = ["$scope", "$state"];

	function todoController($scope, $state){
		// so no scopes here
		var vm = this;

		vm.hello = "hello";

		vm.entries = [{
			id: 0,
			name: "Fuck it!",
			done: true
		},{
			id: 1,
			name: "Fuck it! 1",
			done: false
		},{
			id: 2,
			name: "Fuck it! 2",
			done: false
		}];

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
