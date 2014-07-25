var app = app || {};

var Router = Backbone.Router.extend({
  routes:{
    '': 'listView',
    'grid': 'gridView'
  },

  initialize: function() {
    // this.list = new app.List();
    this.listView = new app.ListView( sampleColl );
    this.gridView = new app.GridView( sampleColl );

  },

  setView: function( param ) {
    console.log(param);
  },

  home: function () {
    console.log("home view activated");

    $('#app').html("Welcome home.");
  },

  listView : function() {
    console.log("list view activated");
    $('#app').html(this.listView.render().el);
    //$('#app').html("");
    //this.view = new app.ListView( sampleColl );
  },

  gridView: function() {
    console.log("grid view activated");
    $('#app').html(this.gridView.render().el);
    // $('#app').html("");
    // this.view = new app.GridView( sampleColl );
  },

  loadView : function(view) {
    this.view && (this.view.close ? this.view.close() : this.view.remove());
    this.view = view;
  }

});