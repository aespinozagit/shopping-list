$(document).ready(function() {

           $('.input-button').click(function() {
    if( $('input#add-input').val().trim().length == 0 ) {
        // alert("put something here");
        $('#error').show();
        $('input#add-input').val("");
    } else { 

    $('ul').append('<li class="show-item">' + $('input#add-input').val() + '</li>');
    $('ul').append('<div class="item-button"><i class="fa fa-bars fa-3x"></i></div>');
    $('ul').append('<i class="fa fa-trash fa-4x trashcan"></i>');
    $('input#add-input').val("");
    $('#error').hide();
    $('.item-list').css('display', 'inline-block');

    var el = $('');

          $("ul").append(el);

// el.click(function(){
//   $(this).css('background-color', '#D27752');
//     $('.show-item').css('border-color', '#D27752');
//     $(this).html('<i class="list-item-complete fa fa-check fa-3x"></i>');
// });

    $('.item-button').click(function() {
     $(this).css('background-color', '#D27752');
    $('.show-item').css('border-color', '#D27752');
    $(this).html('<i class="list-item-complete fa fa-check fa-3x"></i>');
    $('.show-item').css('text-decoration', 'line-through');
})


    };  
  
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

  
  
  });