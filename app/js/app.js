var app = app || {};

$(function() {
	
	app.router = new Router();
	$(function() {
		Backbone.history.start();
	});

});