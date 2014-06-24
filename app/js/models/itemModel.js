var app = app || {};

app.itemModel = Backbone.Model.extend({
  defaults: {
    "title": "Title",
    "format": "gif",
    "imageUrl": "images/ph-doge.jpg",
    "emotion": "funny",
    "keywords": "dog,coin",
    "isBroken": "false",
    "fallbackUrl":"static",
    "link": "#derp",
    "dateAdded": "1/1/1970"
  }

});