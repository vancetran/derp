var app = app || {};

app.GridView = Backbone.View.extend({

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
	// render library by rendering each item in its collection
	/*
	render: function() {
		this.collection.each(function( item ) {
			this.renderItem( item );
		}, this );
	},*/

	// render a item by creating a ItemView and appending the
	// element it renders to the library's element
	renderItem: function( item ) {
		var itemGridView = new app.ItemGridView({
			model: item
		});
		this.$el.append( itemGridView.render().el );
	},

	events:{
		// 'click #add':'addItem'
	}

});