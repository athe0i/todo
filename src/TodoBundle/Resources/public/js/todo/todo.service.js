( function(  ){
	'use strict';

	angular.module("application.todo").factory("todoService", todoService);

	todoService.$inject = ["messagesService"];

	function todoService(messagesService){
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
			saveEntry: saveEntry,
			undoneEntry: undoneEntry
		};

		function getList(){
			return entityList;
		}

		function addEntry(entryText){
			var entry = {
				id: entityList.length,
				name: entryText,
				done: false
			};

			var errors = validateEntry(entry);

			if(errors.length == 0){
				entityList.push(entry);
			}
			else{
				showErrors(errors);
			}

			return this.getList();
		}

		function saveEntry(entry){
			var newEntry = angular.copy(entry);
			newEntry.name = newEntry.name_new;
			var errors = validateEntry(newEntry);

			if(errors.length > 0){
				showErrors(errors);
				return entry;
			}

			entry = newEntry;
			return newEntry;
		}

		function showErrors(errors){
			messagesService.toast("Error in todo: " + errors.join("<br>"), {cls: "red accent-1"});
		}

		function validateEntry(entry){
			var errors = [];

			if(entry.id !== 0 && (!entry.id || !isFinite(entry.id))){
				errors.push("Wrong TODO id.");
			}
			if(!entry.name || !entry.name.length){
				errors.push("Could not add empty TODO.");
			}

			return errors;
		}

		function doneEntry(entry){
			entry.done = true;
		}

		function undoneEntry(entry){
			entry.done = false;
		}
	}
})();
