var app = app || { Models: {}, Views: {}, Collections: {} };

app.Models.derpItem = Backbone.Model.extend({
  defaults: {
    "title": "Title",
    "format": "gif",
    "imageurl": "images/ph-doge.jpg",
    "emotion": "funny",
    "keywords": "dog,coin",
    "broken": "false",
    "fallbackurl":"static",
    "link": "#derp"
  }

});