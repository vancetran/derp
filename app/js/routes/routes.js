var app = app || {};

var Workspace = Backbone.Router.extend({
  routes:{
    'list': 'listView'
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
    console.log("hello");

    $('#app').html(app.ListView.render().el);
  },

});

app.TodoRouter = new Workspace();
$(function() {
  Backbone.history.start();
});