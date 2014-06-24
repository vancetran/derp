var app = app || {};

app.ItemCollection = Backbone.Collection.extend({
  model: app.ItemModel,
  // url: '/api/items'
});