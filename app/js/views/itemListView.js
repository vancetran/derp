var app = app || {};

app.ItemListView = Backbone.View.extend({
  tagName: 'li',
  className: 'itemContainer2',
  template: _.template( $( '#itemListTemplate' ).html() ),

  render: function() {
    //this.el is what we defined in tagName. use $el to get access to jQuery html() function
    this.$el.html( this.template( this.model.toJSON() ) );

    return this;
  },

  events: {
    //'click .delete': 'deleteItem'
  },

  deleteItem: function() {
    //Delete model
    this.model.destroy();
    //Delete view
    this.remove();
  },
  
});