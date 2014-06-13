var app = app || { Models: {}, Views: {}, Collections: {} };

app.Models.derpItem = Backbone.Model.extend({
  defaults: {
    "title": "Title",
    "format": "gif",
    "imageurl": "images/ph-doge.jpg",
    "emotion": "funny",
    "keywords": "dog,coin",
    "broken": "false",
    "fallbackurl":"static"
  },

  initialize: function() {
    console.log("A model with title " + this.get("title") +  " has been created and it has the imageurl of " + this.get("imageurl"));

    this.on('change', function(){
      console.log("Something in our model has changed");
    });

    this.on('change:imageurl', function(){
      console.log("The imageurl for " + this.get("title") + " model just changed to " + this.get("imageurl"));
    });
  }

});