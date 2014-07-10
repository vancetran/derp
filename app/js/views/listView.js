var app = app || {};


app.ListView = Backbone.View.extend({

  el: '#app',

  initialize: function( initialItems ) {
    this.collection = new app.ItemCollection( initialItems );
    // this.collection.fetch({reset: true});
    // this.render();
    
    this.listenTo( this.collection, 'add', this.renderItem );
    // this.listenTo( this.collection, 'reset', this.render );
  },

  // render library by rendering each item in its collection
  render: function() {
    console.log("Hello");
    this.collection.each(function( item ) {
      this.renderItem( item );
    }, this );
  },

  // render a item by creating a ItemListView and appending the
  // element it renders to the library's element
  renderItem: function( item ) {
    var itemListView = new app.ItemListView({
      model: item
    });
    this.$el.append( itemListView.render().el );
  },

  events:{
    //'click #add':'addItem'
  }


});