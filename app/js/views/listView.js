var app = app || {};

app.ListView = Backbone.View.extend({

  el: '#app',

  initialize: function( initialItems ) {
    _.bindAll(this, 'render','appendItem'); // every function that uses 'this' as the current object should be in here
    this.collection = new app.List( initialItems );
    
    // this.listenTo( this.collection, 'add', this.renderItem );
    this.render();
  },

  render: function() {
    $(this.el).append("<ul></ul>");
    this.collection.each(function( item ) {
      this.appendItem( item );
    }, this );
  },

  appendItem: function(item){
    var itemView = new app.ItemView({
      model: item
    });
    $('ul', this.el).append(itemView.render().el);
  },

  events:{
  },

  close: function() {
		_.each(this.subViews, function(view) { view.remove(); });
		this.remove();
	}


});