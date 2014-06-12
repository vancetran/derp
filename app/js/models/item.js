var App = App || {};

App.Models.Item = Backbone.Model.extend({
  defaults: {
    "id": "default",
    "title": "Title",
    "format": "gif",
    "url": "images/placeholder.png",
    "emotion": "funny",
    "keywords": "dog,coin",
    "broken": "false",
    "fallback":"static"
  }
});
