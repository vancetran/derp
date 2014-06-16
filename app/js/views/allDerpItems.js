var app = app || { Models: {}, Views: {}, Collections: {} };

app.Views.allDerpItems = Backbone.View.extend({

  tagName: "section",

  render: function() {
    this.collection.each(this.addDerp, this);
    return this;
  },

  addDerp: function(derp) {
    var derpView = new app.Views.singleDerpItem({ model: derp });
    this.$el.append(derpView.render().el);
  }

});