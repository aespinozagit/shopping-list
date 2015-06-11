$(document).ready(function() {

  $(".input-button").click(function(){
            alert($('#add-input').val());
            $(".show-item").append($('#add-input'));
        });

  $('.input-button').mouseenter(function() {
    $(this).css('background-color', '#7AB3CE');
    $('.input-button').css('color', '#787778');
    $('.input-button').css('cursor', 'pointer');
  })      

  .mouseleave(function() {
    $('.input-button').css('background-color', '#7CBF94');
    $('.input-button').css('color', 'white');
  })

  .mousedown(function() {
  })

  .mouseup(function() {
  });

    $('.item-button').mouseenter(function() {
    $(this).css('cursor', 'pointer');
    $(this).css('background-color', '#D27752');
    $('.show-item').css('border-color', '#D27752');
    $(this).html('<i class="list-item-complete fa fa-check fa-3x"></i>');

  })    

  .mouseleave(function() {
    $('.item-button').css('background-color', '#7AB3CE');
    $('.show-item').css('border-color', '#7AB3CE');
    $(this).html('<i class="fa fa-bars fa-3x"></i>');
  })

$('.item-button').click(function() {
     $(this).css('background-color', '#D27752');
    $('.show-item').css('border-color', '#D27752');
    $(this).html('<i class="list-item-complete fa fa-check fa-3x"></i>');
})

  .mousedown(function() {

  })

  .mouseup(function() {
  });

  $('.trashcan').mouseenter(function() {
    $(this).css('cursor', 'pointer');
  })    

  .mouseleave(function() {
  })

  .mousedown(function() {

  })

  .mouseup(function() {
  });

  $('#add-button').click(function() {
    if( $('input#add-todo').val().trim().length == 0 ) {
        // alert("put something here");
        $('#error').show();
        $('input#add-todo').val("");
    } else { 

    $('ul').append('<li class="todo"><button class="item">Done</button>' + $('input#add-todo').val() + '</li>');
    $('input#add-todo').val("");
    $('#error').hide();

    };  
  
  });


    $(document).keydown(function(e) {
    if (e.keyCode == 88) {
    	playCool();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('#cool-sound')[0].pause();
      $('#cool-sound')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
});