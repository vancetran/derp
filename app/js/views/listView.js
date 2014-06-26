var app = app || {};


app.ListView = Backbone.View.extend({

  el: '#list-view',

  initialize: function( initialItems ) {
    this.collection = new app.ItemCollection( initialItems );
    // this.collection.fetch({reset: true});
    this.render();
    
    this.listenTo( this.collection, 'add', this.renderItem );
    // this.listenTo( this.collection, 'reset', this.render );
  },

  // render library by rendering each item in its collection
  render: function() {
    this.collection.each(function( item ) {
      this.renderItem( item );
    }, this );
  },

  // render a item by creating a ItemView and appending the
  // element it renders to the library's element
  renderItem: function( item ) {
    var itemView = new app.ItemView({
      model: item
    });
    this.$el.append( itemView.render().el );
  },

  events:{
    'click #add':'addItem'
  },

  addItem: function( e ) {
    e.preventDefault();

    var formData = {};

    $( '#addItem div' ).children( 'input' ).each( function( i, el ) {

      // Trying to get the file upload to work...
      //
      // if( $(el).get(0).form.id === "coverImage" ){
      //   // console.log("bingo");
      //   // formData[ el.id ] = "images/".$( el ).val();
      // }

      if( $( el ).val() != '' )
      {
        if( el.id === 'keywords' ) {
          formData[ el.id ] = [];
          _.each( $( el ).val().split( ' ' ), function( keyword ) {
            formData[ el.id ].push({ 'keyword': keyword });
          });
        } else if( el.id === 'releaseDate' ) {
          formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
        } else {
          formData[ el.id ] = $( el ).val();
        }
      }
      // Clear input field value
      $( el ).val('');
    });

    this.collection.create( formData );
  }


});