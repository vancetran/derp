$( document ).ready(function() {

  // Item details toggle
  $(".item-detail-button").click(function(){
      $(this).next(".item-detail").toggle();
    }
  );

});