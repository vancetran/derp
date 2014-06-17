var app = app || {};

app.Router = Backbone.Router.extend({

  routes :{
    "": "noCopy",
    "thatdog" : "thatdogMsg",
    "yojimbo": "yojimboMsg",
    "falafeldog" : "falafeldogMsg"
  },

  noCopy: function() {
    $("#copy").html("");
  },

  thatdogMsg: function() {
    $("#copy").html("That Dog");
  },

  yojimboMsg: function() {
    $("#copy").html("Yojimbo!");
  },

  falafeldogMsg: function() {
    $("#copy").html("I know how to to make falafel");
  }


});