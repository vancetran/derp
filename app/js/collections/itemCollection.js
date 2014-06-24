var app = app || {};

app.itemCollection = Backbone.Collection.extend({
  model: app.itemModel
});