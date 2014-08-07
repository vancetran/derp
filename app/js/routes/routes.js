var app = app || {};

var Router = Backbone.Router.extend({
	routes:{
		'': 'listView',
		'grid': 'gridView'
	},

	initialize: function() {
		this.fullList = new app.List(sampleColl);

		this.listView = new app.ListView( {collection: this.fullList} );
		this.gridView = new app.GridView( {collection: this.fullList} );

	},

	setView: function( param ) {
		console.log(param);
	},

	home: function () {
		console.log("home view activated");

		$('#app').html("Welcome home.");
	},

	listView : function() {
		console.log("list view activated");
		$('#app').html(this.listView.render().el);
		app.doMasonry();
	},

	gridView: function() {
		console.log("grid view activated");
		$('#app').html(this.gridView.render().el);
		app.doMasonry();
	},

	loadView : function(view) {
		this.view && (this.view.close ? this.view.close() : this.view.remove());
		this.view = view;
	}

});