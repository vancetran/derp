var app = app || {};

app.ItemView = Backbone.View.extend({
  tagName: 'li',
  template: _.template( $( '#list-template-simple' ).html() ),

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );

    return this;
  },

  events: {
  }
  
});