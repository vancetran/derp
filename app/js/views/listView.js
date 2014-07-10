var app = app || {};

app.ListView = Backbone.View.extend({

  el: '#app',

  initialize: function( initialItems ) {
    _.bindAll(this, 'render','appendItem'); // every function that uses 'this' as the current object should be in here
    this.collection = new app.List( initialItems );
    // this.collection.fetch({reset: true});
    // this.render();
    
    this.listenTo( this.collection, 'add', this.renderItem );
    // this.listenTo( this.collection, 'reset', this.render );
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

  /*
  renderItem: function( item ) {
    var itemListView = new app.ItemView({
      model: item
    });
    this.$el.append( itemListView.render().el );
  },
  */

  events:{
    //'click #add':'addItem'
  }


});