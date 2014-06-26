$( document ).ready(function() {

  // Item details toggle
  $(".item-detail-button").click(function(){
      $(this).next(".item-detail").toggle();
    }
  );

  // Masonry
  imagesLoaded( '#list-view', function() {
    $('#list-view').masonry()
      .append( elem )
      .masonry( 'appended', elem );
      // no method is same as layout -> .masonry('layout')
      masonry();
  });

});