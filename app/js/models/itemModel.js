var app = app || {};

app.ItemModel = Backbone.Model.extend({
  defaults: {
    "title":"default",
    "format":"default",
    "imageUrl":"default",
    "keywords":"default",
    "isBroken":"FALSE",
    "fallbackUrl":"default",
    "dateAdded":"1/1/1970",
    "link": "derp"
  }

});