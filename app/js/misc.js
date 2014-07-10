$( document ).ready(function() {

  // Item details toggle
  $(".item-detail-button").click(function(){
      $(this).next(".item-detail").toggle();
      $msnryContainer.masonry(); // trigger each time to fix the layout
    }
  );

  // Masonry
  var $msnryContainer = $('#app .grid');

  imagesLoaded( $msnryContainer, function() {
    $msnryContainer.masonry();
  });



});