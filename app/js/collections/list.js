var app = app || {};

app.List = Backbone.Collection.extend({
	model: app.Item,
	// url: '/api/items'
});