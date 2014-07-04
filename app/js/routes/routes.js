var app = app || {};

var Workspace = Backbone.Router.extend({
  routes:{
    //'list': 'listView',
    //'grid': 'gridView'
  },

  initialize: function(){
    this.listView = new app.ListView( sampleColl );
  },


  setView: function( param ) {
    console.log(param);

    /*
    // Set the current filter to be used
    if (param) {
      param = param.trim();
    }
    app.TodoFilter = param || '';

    // Trigger a collection filter event, causing hiding/unhiding
    // of Todo view items
    app.Todos.trigger('filter');
    */
  },

  listView: function() {
    console.log("list view");

    new app.ListView( sampleColl );

    $('#app').html(this.listView.render());
  },

  gridView: function() {
    console.log("grid view");

    $('#app').html("blank");
    // $('#app').html(this.ListView.render().el);
  }

});

app.TodoRouter = new Workspace();
$(function() {
  Backbone.history.start();
});