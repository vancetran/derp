var app = app || {};

app.GridView = Backbone.View.extend({

	className: "grid",
	initialize: function( initialItems ) {
		// this.collection = new app.List( initialItems );
		// this.collection.fetch({reset: true});    
		// this.listenTo( this.collection, 'add', this.renderItem );
		// this.listenTo( this.collection, 'reset', this.render );

		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},

	template: Handlebars.compile(
		'{{#each models}}<div class="itemContainer"><a href="{{attributes.imageUrl}}"><img src="{{attributes.imageUrl}}" alt="{{attributes.title}}" class="image" /></a></div>{{/each}}'
	),

	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	},

	events:{
		// 'click #add':'addItem'
	}

});