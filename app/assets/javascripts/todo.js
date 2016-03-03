window.Todo = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},

 initialize: function(){
	var routes = new Todo.Routers.EntriesRoutes();
		return Backbone.history.start({
			pushState:true
		});
	}
};

$(document).ready(function(){
	Todo.initialize();
});


