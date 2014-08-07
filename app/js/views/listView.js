var app = app || {};

app.ListView = Backbone.View.extend({

	className: "grid row",
	initialize: function( initialItems ) {
		// _.bindAll(this, 'render','appendItem'); // every function that uses 'this' as the current object should be in here
		// this.collection = new app.List( initialItems );
		// this.listenTo( this.collection, 'add', this.renderItem );

		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},

	template: Handlebars.compile(
		'<ul>' +
		'{{#each models}}<li><a href="{{attributes.imageUrl}}">{{attributes.title}}</a></li>{{/each}}' +
		'</ul>'
	),

	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	},

	events:{
	},

	close: function() {
		_.each(this.subViews, function(view) { view.remove(); });
		this.remove();
	}


});