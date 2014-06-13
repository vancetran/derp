var app = app || {};

app.Models.derpItem = Backbone.Model.extend({
  defaults: {
    "id": "default",
    "title": "Title",
    "format": "gif",
    "url": "images/ph-doge.jpg",
    "emotion": "funny",
    "keywords": "dog,coin",
    "broken": "false",
    "fallback":"static"
  }
});
