var Workspace = Backbone.Router.extend({
	route:{
		'*filter': 'setFilter'
	},
	setFilter: function( param ) {
		window.app.Todos.trigger('filter');
	}
});

app.TodoRouter = new Workspace();
Backbone.history.start();