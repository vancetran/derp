var app = app || {};

app.ListView = Backbone.View.extend({

  initialize: function( initialItems ) {
    _.bindAll(this, 'render','appendItem'); // every function that uses 'this' as the current object should be in here
    this.collection = new app.List( initialItems );
    
    // this.listenTo( this.collection, 'add', this.renderItem );
  },

  template: Handlebars.compile(
    '<ul>' +
    '{{#each models}}<li><a href="{{attributes.imageUrl}}">{{attributes.title}}</a></li>{{/each}}' +
    '</ul>'
  ),

  render: function () {
    this.$el.html(this.template(this.collection));
    return this;
  },

  /*
  render: function() {
    $(this.el).append("<ul></ul>");
    this.collection.each(function( item ) {
      this.appendItem( item );
    }, this );
  },*/

  appendItem: function(item){
    var itemView = new app.ItemView({
      model: item
    });
    $('ul', this.el).append(itemView.render().el);
  },

  events:{
  },

  close: function() {
		_.each(this.subViews, function(view) { view.remove(); });
		this.remove();
	}


});