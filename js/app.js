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
			$('#error').hide();

		document.getElementById('add-input').value = '';

		}
	});


// cross off list items
$('#item-list').on('click', 'li', function(){
	$(this).toggleClass('border'); 
	$(this).children('.item-button').toggleClass('background');
	$(this).children('span').toggleClass('strike');
});
	// $('#item-list').click(function(){
	// 	$('.show-item').toggleClass('strike');
	// 	$('.item-button').toggleClass('background');
	// 	$('.show-item').toggleClass('border');
	// 	$('.item-button').html($('.item-button').html() == '<i class="fa fa-bars fa-3x"></i>' ? '<i class="fa fa-check fa-3x"></i>' : '<i class="fa fa-bars fa-3x"></i>');
 // });

//delete list items
 $(document).on("click", "button.trashcan", function(){
        $( this ).parent().remove();
    });


//sortable list items
	$(function() {
    $( "#item-list" ).sortable();
    $( "#item-list" ).disableSelection();
  });
});
// });
