$(document).ready(function() {
  $('.input-button').mouseenter(function() {
    $(this).css('background-color', '#7AB3CE');
    $('.input-button').css('color', '#787778');
  })      

  .mouseleave(function() {
    $('.input-button').css('background-color', '#7CBF94');
    $('.input-button').css('color', 'white');
  })

  .mousedown(function() {
  })

  .mouseup(function() {
  });

    $('.items-button').mouseenter(function() {
    $(this).css('background-color', '#D27752');
    $('.circle-o').hide();
    $('.complete').show();
    $('.show-item').css('border-color', '#D27752');
  })      

  .mouseleave(function() {
    $('.items-button').css('background-color', '#7AB3CE');
    $('.complete').hide();
    $('.circle-o').show();
    $('.show-item').css('border-color', '#7AB3CE');
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