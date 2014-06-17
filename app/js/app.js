var doge2 = new app.Models.derpItem({
  title: "That Doge",
  imageurl: "images/ph-doge-round.png",
  link: "thatdog"
});
var hello = new app.Models.derpItem({
  title: "Yojimbo",
  link: "yojimbo"
});
var falafel = new app.Models.derpItem({
  title: "Falafel dog",
  imageurl: "images/ph-doge-round.png",
  link: "falafeldog"
});

var dogGroup = new app.Collections.allDerps([
  doge2, hello
]);

dogGroup.add(falafel);
// dogGroup.remove(doge2);

var dogGroupView = new app.Views.allDerpItems({ collection: dogGroup });

$("#allDerps").html(dogGroupView.render().el);

console.log(dogGroup.toJSON());

var derpRouter = new app.Router();
Backbone.history.start();
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
