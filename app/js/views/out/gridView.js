var app = app || {};


app.GridView = Backbone.View.extend({

  el: '#app',

  initialize: function( initialItems ) {
    this.collection = new app.List( initialItems );
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

  // render a item by creating a ItemView and appending the
  // element it renders to the library's element
  renderItem: function( item ) {
    var itemView = new app.ItemView({
      model: item
    });
    this.$el.append( itemView.render().el );
  },

  events:{
    // 'click #add':'addItem'
  }


});