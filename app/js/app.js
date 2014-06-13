var doge2 = new app.Models.derpItem({
  title: "That Doge"
});
var hello = new app.Models.derpItem({
  title: "Yojimbo"
});
var falafel = new app.Models.derpItem({
  title: "Falafel dog",
  imageurl: "foo.gif"
});

var dogGroup = new app.Collections.allDerps([
  doge2, hello
]);

dogGroup.add(falafel);
// dogGroup.remove(doge2);


console.log(dogGroup.toJSON());


/*
var app = new (Backbone.View.extend({

	Models: {},
	Views: {},
	Collections: {},

	start: function(bootstrapData) {
		Backbone.history.start();

		// this.derpItem = new DerpItems(bootstrapData);

	},

	render: function(){
	}

}))({ el: document.body });
*/
// $(function(){ app.start(bootstrapData); })
