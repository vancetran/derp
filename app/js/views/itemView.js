var app = app || {};

app.ItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'itemContainer2',
  template: _.template( $( '#list-template-simple' ).html() ),

  render: function() {
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
  }
  
});