var app = new (Backbone.View.extend({

	Models: {},
	Views: {},
	Collections: {},

	start: function(bootstrapData) {
		Backbone.history.start();

		// this.derpItem = new DerpItems(bootstrapData);
	},

	render: function(){
	}

}))({ el: document.body });

// $(function(){ app.start(bootstrapData); })
