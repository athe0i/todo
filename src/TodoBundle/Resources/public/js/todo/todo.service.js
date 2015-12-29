( function(  ){
	'use strict';

	angular.module("application.todo").factory("todoService", todoService);

	//messages.$inject = ["application.toastDirective"];

	function todoService(){
		var entityList = [{
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

		return {
			getList: getList,
			addEntry: addEntry,
			doneEntry: doneEntry,
			undoneEntry: undoneEntry
		};

		function getList(){
			return entityList;
		}

		function addEntry(entryText){
			entityList.push({
				id: entityList.length,
				name: entryText,
				done: false
			});

			return this.getList();
		}

		function doneEntry(entry){
			entry.done = true;
		}

		function undoneEntry(entry){
			entry.done = false;
		}
	}
})();
