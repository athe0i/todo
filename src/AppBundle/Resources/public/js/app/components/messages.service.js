( function(  ){
	'use strict';

	angular.module("application.components").factory("messagesService", messages);

	//messages.$inject = ["application.toastDirective"];

	function messages(){
		return {
			log: function(message, level){
				level = level || "log";
				console[level](message);
			},
			toast: function(message, options = {}){

				Materialize.toast(message,
								  options.duration || 4000,
								  options.cls || null
								 );
			}
		};
	}
})();
