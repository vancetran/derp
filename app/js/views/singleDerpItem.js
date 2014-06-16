var app = app || { Models: {}, Views: {}, Collections: {} };

app.Views.singleDerpItem = Backbone.View.extend({
  tagName: "article",
  className: "derpListItem",

  template: _.template( $("#derpElement").html() ),

  render: function() {
    var derpTemplate = this.template(this.model.toJSON());
    this.$el.html(derpTemplate);
    return this;
  }
});