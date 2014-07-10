var app = app || {};

var Workspace = Backbone.Router.extend({
  routes:{
    '': 'listView',
    //'list': 'listView',
    //'grid': 'gridView'
  },

  initialize: function(){

    this.listView = new app.ListView( sampleColl );
    // this.gridView = new app.GridView( sampleColl );
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

  home: function () {
    console.log("home view activated");

    $('#app').html("Welcome home.");
  },

  listView: function() {
    console.log("list view activated");
    $('#app').html("");
    $('#app').html(this.listView.render());
  },

  gridView: function() {
    console.log("grid view activated");

    $('#app').html("");
    $('#app').html(this.gridView.render());
    // $('#app').html(this.ListView.render().el);
  }

});

app.TodoRouter = new Workspace();
$(function() {
  Backbone.history.start();
});