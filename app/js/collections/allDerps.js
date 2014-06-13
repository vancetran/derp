var app = app || { Models: {}, Views: {}, Collections: {} };

app.Collections.allDerps = Backbone.Collection.extend({
  model: app.Models.derpItem
});