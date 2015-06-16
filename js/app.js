$(document).ready(function(){

// hover effect for add button
$('#add-button').mouseenter(function() {
    $(this).css('background-color', '#7AB3CE');
    $(this).css('color', '#787778');
    $(this).css('cursor', 'pointer');
  })

 .mouseleave(function() {
    $('#add-button').css('background-color', '#7CBF94');
    $('#add-button').css('color', 'white');
  });

//add list items
$('#add-button').click(function(){
		var txtbox = document.getElementById('add-input');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#add-input').val())) {
			$('#error').show();
		} else {
			$('<li class="show-item"></li>').appendTo('#item-list').html('<div class="item-button"><i class="fa fa-bars fa-2x"></i></div><button class="trashcan"><i class="fa fa-trash fa-2x"></i></button><span>' + txtval + '</span>');

<<<<<<< HEAD
		document.getElementById('add-input').value = '';
		}
	});
	// $('#add-button').click(function(e) {
	// 	e.preventDefault();

 //    if ($('input#add-input').val().trim().length === 0 ) {
 //        // alert("put something here");
 //        $('#error').show();
 //        $('input#add-input').val("");
 //    } 

 //    else { 
	//     $('ul').append('<li class="show-item">' + $('input#add-input').val() + '<button class="item-button"><i class="fa fa-bars fa-3x"></i></button><button class="trashcan" type="submit"><i class="fa fa-trash fa-2x"></i></button></li>');
	//     $('input#add-input').val("");
	//     $('#error').hide();
	// }

// cross off list items
$('#item-list').on('click', 'li', function(){
	$(this).toggleClass('strike'); 
	$(this).children('.item-button').toggleClass('background');
});
	// $('#item-list').click(function(){
=======
    else { 
	    $('ul').append('<li class="show-item">' + $('input#add-input').val() + '<button class="item-button"><i class="fa fa-bars fa-2x"></i></button><button class="trashcan" type="submit"><i class="fa fa-trash fa-2x"></i></button></li>');
	    $('input#add-input').val("");
	    $('#error').hide();
	}

// cross off list items
$('#item-list').on('click', 'li', function(){
  $(this).toggleClass('strike');
  $('.item-button').toggleClass('background');
  $(this).toggleClass('border');
});
	// $('#item-list').click (function(){
>>>>>>> b4227131b334ed71f4bfa5676647e9a76601dcdb
	// 	$('.show-item').toggleClass('strike');
	// 	$('.item-button').toggleClass('background');
	// 	$('.show-item').toggleClass('border');
	// 	$('.item-button').html($('.item-button').html() == '<i class="fa fa-bars fa-3x"></i>' ? '<i class="fa fa-check fa-3x"></i>' : '<i class="fa fa-bars fa-3x"></i>');
 // });

//delete list items
<<<<<<< HEAD
 $(document).on("click", "button.trashcan", function(){
        $( this ).parent().remove();
    });

=======
    $(document).on("click", "button.trashcan", function(){
        $( this ).parent().remove();
    });
	// $('.trashcan').click(function(e) {
	// 	e.preventDefault();
 //     $("#item-list").children().remove();
	// });
>>>>>>> b4227131b334ed71f4bfa5676647e9a76601dcdb

//sortable list items
	$(function() {
    $( "#item-list" ).sortable();
    $( "#item-list" ).disableSelection();
  });
});
// });
